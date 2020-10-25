/******************************************* 
* Global Variables
********************************************/
let todoList = [];
let header = document.getElementById("menuBar");
let btns = header.getElementsByClassName("btn");
/******************************************* 
* Event Listeners
********************************************/
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}
window.addEventListener('load', loadData);
document.getElementById("allButton").addEventListener('click', all);
document.getElementById("activeButton").addEventListener('click', active);
document.getElementById("completedButton").addEventListener('click', completed);
/******************************************* 
* Class Tasks - needs text to be created, completed is set to false and timestamp is set to now by default.
********************************************/
class Tasks {
    constructor(text) {
        this.text = text;
        this.completed = false;
        this.timestamp = Date.now();
    }
}
/******************************************* 
* Functions
********************************************/
//creates a task, saves it to localStorage and calls loadData().
function addTask() {
    let task = new Tasks;
    task.text = document.getElementById('taskName').value; 
    todoList.push(task);
    let taskString = JSON.stringify(todoList);
    localStorage.setItem('todoList', taskString);
    loadData(); 
    document.getElementById('taskName').value = '';
}
//deletes a task, resaves the new todoList to localStorage, and calls loadData().
function deleteTask(position) {
    todoList.splice(position, 1);
    let taskString = JSON.stringify(todoList);
    localStorage.setItem('todoList', taskString);
    loadData();  
}
//erases all task HTML, creates an Array that is set the localStorage data, and calls loadView() for each task.
function loadData() {
    document.getElementById('table').innerHTML = '';
    let newArray = JSON.parse(localStorage.getItem('todoList'));
    if (newArray != null) {
        todoList = newArray;
        let index = 0;
        for (task of newArray) {
            loadView(task, index);
            index++;
        }
        remainingTasks();
    }
}
//appends the HTML necessary to display each task, calls strikethrough() if task is completed, when a checkbox is clicked call toggle(), and call remainingTasks().
function loadView(task, index) {
    let loadInfo = '';
    loadInfo = `<li id='${index}' class='taskList'><label class="labels" id='label${index}'><input onclick='strikethrough(${index})' id='checkbox${index}' class='boxes' type='checkbox'>${task.text}</label><input type='button' value='X' class='delete' onclick='deleteTask(${index})'></li>`;
    $('#table').append(loadInfo);
    if (task.completed == true) {
        strikethrough(index);
    }
    document.getElementById(`checkbox${index}`).addEventListener('click', () => toggle(index));
    remainingTasks();
}
//removes hidden class from all list elements.
function all(){
    let allHTMLtasks = document.querySelectorAll('li');
    for (let i = 0; i < todoList.length; i++) {
        allHTMLtasks[i].classList.remove('hidden');
    }
}
//adds hidden class to completed list elements, and removes hidden class from active list elements.
function active(){
    let allHTMLtasks = document.querySelectorAll('li');
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed == true) {
            allHTMLtasks[i].classList.add('hidden');
        } else {
            allHTMLtasks[i].classList.remove('hidden');
        }
    }
}
//adds hidden class to active list elements, and removes hidden class from completed list elements.
function completed(){
    let allHTMLtasks = document.querySelectorAll('li');
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed == false) {
            allHTMLtasks[i].classList.add('hidden');
        } else {
            allHTMLtasks[i].classList.remove('hidden');
        }
    }
}
//counts the active tasks and displays how many are left in the list.
function remainingTasks() {
    let tasksRemaining = 0;
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].completed == false) {
            tasksRemaining++;
        }
    }
    if (tasksRemaining == 1) {
        document.getElementById("tasksLeft").innerHTML = tasksRemaining + ' task left';
    } else {
        document.getElementById("tasksLeft").innerHTML = tasksRemaining + ' tasks left';
    }
}
//when a checkbox is checked, sets completed attribute to true, otherwise it is set to false. Saves the todoList and calls remainingTasks().
function toggle(i) {
    if (todoList[i].completed == true){
        todoList[i].completed = false;
    } else {
        todoList[i].completed = true;
    }
    let taskString = JSON.stringify(todoList);
    localStorage.setItem('todoList', taskString);
    remainingTasks();
}
//when I label (or checkbox) is clicked, toggles the strikethrough off and on. Also, checks the box if the line-through style is used or unchecks it if not.
function strikethrough(i) {
        if (document.getElementById("label" + i).style.textDecoration == "line-through") {
            document.getElementById("label" + i).style.textDecoration = "none";
            document.getElementById(`checkbox${i}`).checked = false;
        } else {
            document.getElementById("label" + i).style.textDecoration = "line-through";
            document.getElementById(`checkbox${i}`).checked = true;
        }
}
