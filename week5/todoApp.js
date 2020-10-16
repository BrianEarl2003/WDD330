let todoList = loadData();

function addTask() {
    let newHTML = '';
    let taskText = '';
    taskText = document.getElementById('taskName').value;  
    newHTML += "<li class='taskList'><label><input type='checkbox'>" + taskText + "</label><input type='button' value='X' class='delete' onclick='deleteTask()'></li>";
    $('#table').append(newHTML);
    document.getElementById('taskName').value = '';
}

function deleteTask() {
    
}

function loadData() {
    let newArray = localStorage.getItem('todoList');
    if (newArray !== null) {
        newArray = JSON.parse(newArray);
        console.log(newArray);
    } else {
        newArray = [];
    }
    return newArray;
}

/*form2.addEventListener('submit', speakerNameNotes, false);

function speakerNameNotes(event) {
    let nameHeading = '';
    event.preventDefault(); // prevent the form from being submitted
    const speaker = {}; // create an empty object
    speaker.name = input.value; // create a name property based on the input field's value
    speaker.note = notes.value;
    speaker.subject = subject.value;
    speakerArray[speakerArray.length] = speaker;
    console.log(speakerArray);
    let speakerString = JSON.stringify(speakerArray);
    console.log(speakerString);
    localStorage.setItem('speakerArray',  speakerString);
    nameHeading += '<hr><h3>' + (speaker.name) + ' - ' + (speaker.subject) + '</h3><br><p>' + (speaker.note) + '</p>';
    $('#newNotes').append(nameHeading);
}

function loadData() {
    let newArray = localStorage.getItem('speakerArray');
    if (newArray !== null) {
        newArray = JSON.parse(newArray);
        console.log(newArray);
    } else {
        newArray = [];
    }
    return newArray;
}

window.addEventListener('load', loadView(speakerArray));

function loadView(newArray) {
    let loadInfo = '';
    //for (session of sessions) {
    //    $('#test').append(session);
    //    for (speaker of session.speakers) {
    //for (let i = 0; i < newArray.length; i++) {
        //if (newArray instanceof speaker) {
            for (speaker of newArray) {
                loadInfo = '<hr><h3>' + speaker.name + ' - ' + speaker.subject + '</h3><br><p>' + speaker.note + '</p>';
                $('#test').append(loadInfo);  
            }
        //} else {
        //if (newArray[i] instanceof sessionObject) {
            /*for (sessionObject of newArray) {
                loadInfo = '<hr><h2>General Conference ' + sessionObject.season + ' ' + sessionObject.year + ' ' + sessionObject.day + ' ' + sessionObject.time + '</h2>';
                $('#test').append(loadInfo);  
            }*/
        //}   
    //}
//}