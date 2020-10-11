const form1 = document.forms.session;

const season = form1.elements.season;
const year = form1.elements.year;
const day = form1.elements.day;
const time = form1.elements.time;

const form2 = document.forms.search;

const input = form2.elements.searchInput;
const notes = form2.elements.notes;
const subject = form2.elements.subject;

let speakerArray = loadData();

//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

/*form.addEventListener ('submit', search, false);
function search() {
    //alert('Form Submitted');
    event.preventDefault();
    alert(`You Searched for: ${input.value}`);
}*/

/*class Session {
    constructor(season, year, day, time) {
        this.season = season;
        this.year = year;
        this.day = day;
        this.time = time;
        this.speakers = [];
    }
}

class Speaker {
    constructor(name, subject, notes) {
        this.name = input;
        this.subject = subject;
        this.notes = notes;
    }
}

const sessionController = {
    watch(form1) {
        form1.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form1.season.value);
        this.add(form1.year.value);
        this.add(form1.day.value);
        this.add(form1.time.value);
        }, false);
    },
    add(season, year, day, time) {
        const session = new Session(season);
        const session = new Session(year);
        const session = new Session(day);
        const session = new Session(time);
        sessionView.render(session);
    }
};

const sessionView = {
    render(session) {
        ///const list = document.getElementById('list');
        //const li = document.createElement('li');
        //li.innerHTML = item.name;
        //list.appendChild(li);
        let html1 = '';
        html1 += '<hr><h2>General Conference ' + (session.season) + ' ' + (session.year) + ' ' + (session.day) + ' ' + (session.time) + '</h2>'; // convert object to JSON string and display in alert dialog
        $('#newNotes').append(html1);
        // reset the input field
    }
};

const speakerController = {
    watch(form2) {
        form2.addEventListener('submit', (event) => {
        event.preventDefault(); // prevent the form from being submitted
        this.add(form2.name.value);
        this.add(form2.subject.value);
        this.add(form2.notes.value);
        }, false);
    },
    add(name, subject, notes) {
        const speaker = new Speaker(name);
        const speaker = new Speaker(subject);
        const speaker = new Speaker(notes);
        speakerView.render(speaker);
    }
};

const speakerView = {
    render(speaker) {
        //const list = document.getElementById('list');
        //const li = document.createElement('li');
        //li.innerHTML = item.name;
        //list.appendChild(li);
        // reset the input field
        let nameHeading = '';
        nameHeading += '<hr><h3>' + (speaker.name) + ' - ' + (speaker.subject) + '</h3><br><p>' + (speaker.notes) + '</p>';
        $('#newNotes').append(nameHeading);
        form2.subject.value = '';
        form2.notes.value = '';
    }
};

sessionController.watch(form1);
speakerController.watch(form2);*/

input.value = 'Name of Speaker';
input.addEventListener('focus', function(){
    if (input.value==='Name of Speaker') {
        input.value = '';
    }
}, false);
input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Name of Speaker';
    } 
}, false);

form1.addEventListener('submit', session, false);

function session(event) {
    let session = '';
    event.preventDefault(); // prevent the form from being submitted
    const sessionObject = {}; // create an empty object
    sessionObject.season = season.value; // create a name property based on the input field's value
    sessionObject.year = year.value;
    sessionObject.day = day.value;
    sessionObject.time = time.value;
    session += '<hr><h2>General Conference ' + (sessionObject.season) + ' ' + (sessionObject.year) + ' ' + (sessionObject.day) + ' ' + (sessionObject.time) + '</h2>'; // convert object to JSON string and display in alert dialog
    $('#newNotes').append(session);
}

form2.addEventListener('submit', speakerNameNotes, false);

function speakerNameNotes(event) {
    let nameHeading = '';
    event.preventDefault(); // prevent the form from being submitted
    
    const speaker = {}; // create an empty object
    
    speaker.name = input.value; // create a name property based on the input field's value
    speaker.note = notes.value;
    speaker.subject = subject.value;
    speakerArray[speakerArray.length] = speaker;
    console.log(speakerArray);
    /*speakerArray[speakerArray.length] = speaker.subject;
    speakerArray[speakerArray.length] = speaker.note;*/
    //localStorage.setItem('speakername', speaker.name);
    //localStorage.setItem('speakernote', speaker.note);
    //localStorage.setItem('speakersubject', speaker.subject);
    //speakerArray[speakerArray.length] = speaker;
    let speakerString = JSON.stringify(speakerArray);
    console.log(speakerString);
    localStorage.setItem('speakerArray',  speakerString);
    //nameHeading += '<hr><h3>' + localStorage.getItem('speakername') + ' - ' + localStorage.getItem('speakersubject') + '</h3><br><p>' + localStorage.getItem('speakernote') + '</p>'; // convert object to JSON string and display in alert dialog
    nameHeading += '<hr><h3>' + (speaker.name) + ' - ' + (speaker.subject) + '</h3><br><p>' + (speaker.note) + '</p>';
    $('#newNotes').append(nameHeading);
    //loadView(speakerArray);
}

window.addEventListener('load', loadView(speakerArray));

function loadData() {
    let newArray = localStorage.getItem('speakerArray');
    if (newArray !== null) {
        newArray = JSON.parse(newArray);
        console.log(newArray);
        //loadInfo += '<hr><h3>' + localStorage.getItem('speakername') + ' - ' + localStorage.getItem('speakersubject') + '</h3><br><p>' + localStorage.getItem('speakernote') + '</p>';
        
    } else {
        newArray = [];
    }
    return newArray;
}

function loadView(newArray) {
    let loadInfo = '';
    //for (session of sessions) {
    //    $('#test').append(session);
    //    for (speaker of session.speakers) {
        for (speaker of newArray) {
            loadInfo = '<hr><h3>' + speaker.name + ' - ' + speaker.subject + '</h3><br><p>' + speaker.note + '</p>';
            $('#test').append(loadInfo);  
        }
    //}
}