const links = [
    {
        label: "Week 1",
        url: "week1.html"
    }
]

function displayLinks() {
    var list = "";
    for (i = 0; i < links.length; i++){
        list += "<li><a href=\"" + links[i].url + "\">" + links[i].label + "</a></li>"
    }
    $('#table').html(list);
}