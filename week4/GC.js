const form1 = document.forms.session;
const form2 = document.forms.search;
const input = form2.elements.searchInput;
const notes = form2.elements.notes;
const subject = form2.elements.subject;
const season = form1.elements.season;
const year = form1.elements.year;
const day = form1.elements.day;
const time = form1.elements.time;
//input.addEventListener('focus', () => alert('focused'), false);
//input.addEventListener('blur', () => alert('blurred'), false);
//input.addEventListener('change', () => alert('changed'), false);

/*form.addEventListener ('submit', search, false);
function search() {
    //alert('Form Submitted');
    event.preventDefault();
    alert(`You Searched for: ${input.value}`);
}*/

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
    //let test = '';
    event.preventDefault(); // prevent the form from being submitted
    const speaker = {}; // create an empty object
    speaker.name = input.value; // create a name property based on the input field's value
    speaker.note = notes.value;
    speaker.subject = subject.value;
    nameHeading += '<hr><h3>' + (speaker.name) + ' - ' + (speaker.subject) + '</h3><br><p>' + (speaker.note) + '</p>'; // convert object to JSON string and display in alert dialog
    $('#newNotes').append(nameHeading);
    /*localStorage.setItem(nameHeading);
    test = localStorage.getItem(nameHeading);
    $('#test').append(test);*/
}

