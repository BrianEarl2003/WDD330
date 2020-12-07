const form1 = document.forms.session;

const season = form1.elements.season;
const year = form1.elements.year;
const day = form1.elements.day;
const time = form1.elements.time;

//const form2 = document.forms.search;

const input = form1.elements.searchInput;
const notes = form1.elements.notes;
const subject = form1.elements.subject;

//const speaker = {};
//const sessionObject = {};

//let speakerArray = [];
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
        let session = new Session(season);
        session = new Session(year);
        session = new Session(day);
        session = new Session(time);
        sessionView.render(session);
    }
};

const sessionView = {
    render(session) {
        let html1 = '';
        html1 += '<hr><h2>General Conference ' + (session.season) + ' ' + (session.year) + ' ' + (session.day) + ' ' + (session.time) + '</h2>'; // convert object to JSON string and display in alert dialog
        $('#newNotes').append(html1);
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
        let speaker = new Speaker(name);
        speaker = new Speaker(subject);
        speaker = new Speaker(notes);
        speakerView.render(speaker);
    }
};

const speakerView = {
    render(speaker) {
        let nameHeading = '';
        nameHeading += '<hr><h3>' + (speaker.name) + ' - ' + (speaker.subject) + '</h3><br><p>' + (speaker.notes) + '</p>';
        $('#newNotes').append(nameHeading);
        form2.subject.value = '';
        form2.notes.value = '';
    }
};

sessionController.watch(form1);
speakerController.watch(form2);

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
}, false);*/

form1.addEventListener('submit', session, false);

function session(event) {
    let session = '';
    let nameHeading = '';
    event.preventDefault(); // prevent the form from being submitted
    const GCobject = {}; // create an empty object
    GCobject.season = season.value; // create a name property based on the input field's value
    GCobject.year = year.value;
    GCobject.day = day.value;
    GCobject.time = time.value;
    GCobject.name = input.value; // create a name property based on the input field's value
    GCobject.note = notes.value;
    GCobject.subject = subject.value;
    GCobject.sessionNumber = GCobject.year - 1830;
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
    if (GCobject.season == "Winter" && GCobject.day == "Sunday" &&  GCobject.time == "ChristmasDevotional")
    sessionValue = .325;     
    GCobject.id = GCobject.sessionNumber + sessionValue;
    speakerArray[speakerArray.length] = GCobject;
    let sessionString = JSON.stringify(speakerArray);
    localStorage.setItem('speakerArray',  sessionString);
    nameHeading = '<hr><h3>' + (GCobject.name) + ' - ' + (GCobject.subject) + '</h3><br><p>' + (GCobject.note) + '</p>';
    session = '<hr><h2>General Conference ' + (GCobject.season) + ' ' + (GCobject.year) + ' ' + (GCobject.day) + ' ' + (GCobject.time) + '</h2>'; // convert object to JSON string and display in alert dialog
    $('#newNotes').append(session);
    $('#newNotes').append(nameHeading);
}

//form2.addEventListener('submit', speakerNameNotes, false);

/*function speakerNameNotes(event) {
    let nameHeading = '';
    event.preventDefault(); // prevent the form from being submitted
    const speaker = {}; // create an empty object
    speaker.name = input.value; // create a name property based on the input field's value
    speaker.note = notes.value;
    speaker.subject = subject.value;
    speakerArray[speakerArray.length] = speaker;
    //console.log(speakerArray);
    let speakerString = JSON.stringify(speakerArray);
    //console.log(speakerString);
    localStorage.setItem('speakerArray',  speakerString);
    nameHeading = '<hr><h3>' + (speaker.name) + ' - ' + (speaker.subject) + '</h3><br><p>' + (speaker.note) + '</p>';
    $('#newNotes').append(nameHeading);
}*/

function loadData() {
    let newArray = localStorage.getItem('speakerArray');
    if (newArray !== null) {
        newArray = JSON.parse(newArray);
        console.log(newArray);
    } else {
        newArray = [];
    }
    return newArray;
    //speakerArray = newArray;
    //console.log('speakerArray ' + speakerArray);
    //callback();
}

window.addEventListener('load', loadView());

function loadView() {
    //loadData();
    let loadInfo1 = '';
    let loadInfo2 = '';
    //for (let i = 0; i < speakerArray.length; i++) {
        //console.log(speakerArray[i].name);
        //if (newArray[i].season !== undefined && newArray[i].name === undefined) {
        /*for (speaker of speakerArray) {
            if (speakerArray[i].name) {
                loadInfo = '<hr><h3>' + speaker.name + ' - ' + speaker.subject + '</h3><br><p>' + speaker.note + '</p>';
                $('#test').append(loadInfo);
            } 
        }*/
        //loadInfo1 = '<hr><h2>General Conference ' + GCobject.season + ' ' + GCobject.year + ' ' + GCobject.day + ' ' + GCobject.time + '</h2>';
        let i = 0;
        for (GCobject of speakerArray) {
            if (speakerArray[i].id == 190.214) {
                loadInfo1 = '<hr><h2>General Conference ' + GCobject.season + ' ' + GCobject.year + ' ' + GCobject.day + ' ' + GCobject.time + '</h2>';
            }
            loadInfo2 = '<hr><h3>' + GCobject.name + ' - ' + GCobject.subject + '</h3><br><p>' + GCobject.note + '</p>';
            $('#test').append(loadInfo1);
            $('#test').append(loadInfo2);
            i++;
        } 
    //}
    //}
}