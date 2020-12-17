//document elements
const form1 = document.forms.session;

const season = form1.elements.season;
const year = form1.elements.year;
const day = form1.elements.day;
const time = form1.elements.time;

const input = form1.elements.searchInput;
const notes = form1.elements.notes;
const subject = form1.elements.subject;
const username = form1.elements.username;
//global variables
let speakerArray = loadData();
let getLocation = '';
let getTimestamp = '';
let comments = loadLocalStorage();

form1.addEventListener('submit', submitTalk, false);
/*************************************************************
 * SubmitTalk
 * Sets the values of elements to attributes of the general conference object.
 * Save the object in local storage and display the newly added notes.
 *************************************************************/
function submitTalk(event) {
    let session = ''; //initialize variables
    let nameHeading = '';
    let sessionValue = 0;
    event.preventDefault(); // prevent the form from being submitted
    const GCobject = {}; // create an empty object
    GCobject.season = season.value;
    GCobject.year = year.value;
    GCobject.day = day.value;
    GCobject.time = time.value;
    GCobject.name = input.value;
    GCobject.note = notes.value;
    GCobject.subject = subject.value;
    GCobject.sessionNumber = GCobject.year - 1830;
    GCobject.username = username.value;
    GCobject.location = getLocation;
    GCobject.timestamp = getTimestamp;
    GCobject.counter = 1;
    if (GCobject.season == "Spring" && GCobject.day == "Saturday" &&  GCobject.time == "Morning")
        sessionValue = .111; 
    if (GCobject.season == "Spring" && GCobject.day == "Saturday" &&  GCobject.time == "Afternoon")
        sessionValue = .112;
    if (GCobject.season == "Spring" && GCobject.day == "Saturday" &&  GCobject.time == "Priesthood")
        sessionValue = .113;
    if (GCobject.season == "Spring" && GCobject.day == "Saturday" &&  GCobject.time == "Women's")
        sessionValue = .114;
    if (GCobject.season == "Spring" && GCobject.day == "Sunday" &&  GCobject.time == "Morning")
        sessionValue = .121;
    if (GCobject.season == "Spring" && GCobject.day == "Sunday" &&  GCobject.time == "Afternoon")
        sessionValue = .122;
    if (GCobject.season == "Fall" && GCobject.day == "Saturday" &&  GCobject.time == "Morning")
        sessionValue = .211;
    if (GCobject.season == "Fall" && GCobject.day == "Saturday" &&  GCobject.time == "Afternoon")
        sessionValue = .212; 
    if (GCobject.season == "Fall" && GCobject.day == "Saturday" &&  GCobject.time == "Priesthood")
        sessionValue = .213; 
    if (GCobject.season == "Fall" && GCobject.day == "Saturday" &&  GCobject.time == "Women's")
        sessionValue = .214; 
    if (GCobject.season == "Fall" && GCobject.day == "Sunday" &&  GCobject.time == "Morning")
        sessionValue = .221; 
    if (GCobject.season == "Fall" && GCobject.day == "Sunday" &&  GCobject.time == "Afternoon")
        sessionValue = .222;
    if (GCobject.season == "Winter" && GCobject.day == "Sunday" &&  GCobject.time == "Christmas Devotional")
        sessionValue = .325;
    if (sessionValue !== .111 && sessionValue !== .112 && sessionValue !== .113 && sessionValue !== .114 && sessionValue !== .121 && sessionValue !== .122 && sessionValue !== .211 && sessionValue !== .212 && sessionValue !== .213 && sessionValue !== .214 && sessionValue !== .221 && sessionValue !== .222 && sessionValue !== .325) {
        $('#alert').html('&#10008 Session is invalid'); //if the session isn't valid, display error message and return nothing
        return;
    } else {
        $('#alert').html(''); //otherwise display no message
    }
    GCobject.id = GCobject.sessionNumber + sessionValue;
    for (let k = 0; k < speakerArray.length; k++) {
        if (speakerArray[k].id == GCobject.id) {
            GCobject.counter++;
        }
    }
    speakerArray[speakerArray.length] = GCobject; //put object in last spot in the array
    let sessionString = JSON.stringify(speakerArray); //stringify speaker array
    localStorage.setItem('speakerArray', sessionString);
    session = '<h2>General Conference ' + (GCobject.season) + ' ' + (GCobject.year) + ' ' + (GCobject.day) + ' ' + (GCobject.time) + '</h2><hr>';
    nameHeading = '<div id="talk"><h3>' + (GCobject.name) + ' - ' + (GCobject.subject) + '</h3><p id="notes">' + (GCobject.note) + '<br><p class="info">-Submitted by ' + (GCobject.username) + ' at ' + (GCobject.timestamp) + ' from ' + (GCobject.location) + '</p></p><button onclick="editNote(' + (speakerArray.length - 1) + ')" class="material-icons right" type="button">edit</button><button onclick="deleteNote(' + (speakerArray.length - 1) + ')" class="material-icons right" type="button">delete</button></div><hr>';
    $('#newNotes').append(session + '<br>' + nameHeading);
}
/*************************************************************
 * LoadData
 * Returns the speaker data from the local storage. 
 *************************************************************/
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

window.addEventListener('load', loadView);
/*************************************************************
 * LoadView
 * Displays the notes from the talks and their respective comments.
 *************************************************************/
function loadView() {
    let loadInfo1 = ''; //initialize variables
    let loadInfo2 = '';
    let i = 0;
    selectionSort(speakerArray); //sort the array
    if (speakerArray.length != 0) { //if the length of the array is not equal to 0
        let lastId;
        for (GCobject of speakerArray) {
            if (i === 0 || speakerArray[i].id !== lastId) { // if i is 0 or the id is not equal to the last id
                loadInfo1 = '<h2>General Conference ' + GCobject.season + ' ' + GCobject.year + ' ' + GCobject.day + ' ' + GCobject.time + '</h2><hr>';
                lastId = speakerArray[i].id;
                $('#test').append(loadInfo1); //display session heading
            }
            loadInfo2 = '<div id="talk"><h3>' + (GCobject.name) + ' - ' + (GCobject.subject) + '</h3><p id="notes">' + (GCobject.note) + '<br><p class="info">-Submitted by ' + (GCobject.username) + ' at ' + (GCobject.timestamp) + ' from ' + (GCobject.location) + '</p></p>'
            loadInfo2 += '<button onclick="editNote(' + i + ')" class="material-icons right" type="button">edit</button><button onclick="deleteNote(' + i + ')" class="material-icons right" type="button">delete</button></div>';
            loadInfo2 += '<div class="comments" id="comments' + i +'"></div><input class="commentBox" id="inputComments' + i + '" placeholder="Comment"><input id="inputUsername' + i + '" placeholder="Username">';
            loadInfo2 += '<button onclick="addComment(' + i + ')" class="material-icons" type="button">comment</button><hr>';
            $('#test').append(loadInfo2); //display notes, speaker and subject
            viewComments(i); //display comments
            i++;
        }
    }
}
/*************************************************************
 * ViewComments
 * Displays the comments 
 *************************************************************/
function viewComments(i) {
    let loadInfo3 = '';
    let commentList = filterCommentsByIndex(i);
    for (let j = 0; j < commentList.length; j++) {
        if (commentList[j].id == speakerArray[i].id && commentList[j].talkCounter == speakerArray[i].counter) {
        loadInfo3 += '<p>' + (commentList[j].content) + '<span class="info">&nbsp&nbsp&nbsp&nbsp-Written by ' + (commentList[j].username) + ' at ' + (commentList[j].date) + ' from ' + (commentList[j].location) + '</span></p>';  
        }
    }
    $('#comments' + i).html(loadInfo3);
}
/*************************************************************
 * ResetElement
 * Erases all notes and comments from the screen
 *************************************************************/
function resetElements() {
    let text1 = '<div id="nnTitle"><button onclick="reload()">View <u>New Notes</u> as Saved Notes</button></div>';
    let text2 = '<div id="tTitle">Saved Notes</div>';
    $('#test').html(text2);
    $('#newNotes').html(text1);
}
/*************************************************************
 * DeleteNote
 * Deletes a specified note and it's corresponding comments
 *************************************************************/
function deleteNote(i) {
    for (let l = 0; l < comments.length; l++) {
        if (comments[l].id == speakerArray[i].id && comments[l].talkCounter == speakerArray[i].counter) {
            comments.splice(l, 1);
        }
    }
    saveLocalStorage(comments);

    speakerArray.splice(i, 1);
    let sessionString = JSON.stringify(speakerArray);
    localStorage.setItem('speakerArray', sessionString);

    resetElements(); //resets the screen
    loadView(); //reloads data on the screen minus the deleted items
}
/*************************************************************
 * EditNote
 * Deletes a note but copies it's info in the session and talk form for resubmission
 *************************************************************/
function editNote(i) {
    season.value = speakerArray[i].season;
    year.value = speakerArray[i].year;
    day.value = speakerArray[i].day;
    time.value = speakerArray[i].time;
    input.value = speakerArray[i].name;
    notes.value = speakerArray[i].note;
    subject.value = speakerArray[i].subject;
    username.value = speakerArray[i].username;
    deleteNote(i);
    notes.focus();
    window.scrollTo(0, 0);
}
/*************************************************************
 * SelectionSort
 * Sorts the speaker array in chronological order of sessions
 *************************************************************/
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        // Assume a minimum value        
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].id < arr[min].id) {
                min = j;
            }
        }
        // Swap if new minimun value found
        if (min !== i) {
          [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

navigator.geolocation.getCurrentPosition(youAreHere);
/*************************************************************
 * YouAreHere
 * Sets the location and the date/time to a global variable
 *************************************************************/
function youAreHere(position) {
    console.log(position);
    getLocation = `${position.coords.latitude.toFixed(4)} latitude and ${position.coords.longitude.toFixed(4)} longitude.`;
    getTimestamp = `${changeStupidDate(new Date(position.timestamp))}`;
}
/*************************************************************
 * ChangeStupidDate
 * This function was written by Nate McCoard for our quake team activity.
 * It changes a timestamp to a more readable date.
 *************************************************************/
function changeStupidDate(date){
    const month = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
    let hour = date.getHours();
    let minutes = '';
    minutes += date.getMinutes();
    if (date.getMinutes() < 10) {
        minutes = '0' + date.getMinutes();
    }
    let AmPm = 'AM';
    if (hour > 12){
       hour = hour - 12;
       AmPm = 'PM';
    } else if (hour == 0){
       hour = 12;
       AmPm = 'AM';
    }
 
    let someDate = `${hour}:${minutes} ${AmPm} on ${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
 
    return someDate;
 }
/*************************************************************
 * SaveLocalStorage
 * Saves the comments to local storage
 *************************************************************/
function saveLocalStorage(commentsArray) {
    localStorage.setItem('comments', JSON.stringify(commentsArray));
}
/*************************************************************
 * LoadLocalStorage
 * Returns the loaded comments from local storage
 *************************************************************/  
function loadLocalStorage() {
    if (localStorage.getItem('comments')) {
      return JSON.parse(localStorage.getItem('comments'));
    } else {
      return [];
    }
}
/*************************************************************
 * FilterCommentsByIndex
 * Filters the comments by id and the amount of talks in that session
 *************************************************************/
function filterCommentsByIndex(talkIndex) {
    let newList = [];
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].id == speakerArray[talkIndex].id && comments[i].talkCounter == speakerArray[talkIndex].counter) {
           newList.push(comments[i]);
        }
    }
    return newList;
}
/*************************************************************
 * AddComment
 * Adds a comment to the local storage after setting it's attributes.
 * The comments are displayed under the corresponding notes.
 *************************************************************/
function addComment(talkIndex){   
    let commentBox = document.getElementById("test").querySelector('#inputComments' + talkIndex).value;
    let usernameBox = document.getElementById("test").querySelector('#inputUsername' + talkIndex).value;

    const newComment = {
        index: talkIndex,
        id: speakerArray[talkIndex].id,
        talkCounter: speakerArray[talkIndex].counter,
        username: usernameBox,
        date: getTimestamp,
        location: getLocation,
        content: commentBox
    }
  
    comments.push(newComment);  
    saveLocalStorage(comments);
    console.log(comments);
    viewComments(talkIndex);
}
/*************************************************************
 * Reload
 * Reloads the page
 *************************************************************/
function reload() {
    location.reload();
}