const links = [
    {
        label: "Week 1",
        url: "week1/"
    },
    {
        label: "Week 2",
        url: "week2/"
    },
    {
        label: "Week 3",
        url: "week3/"
    },
    {
        label: "Week 4",
        url: "week4/"
    },
    {
        label: "Week 5",
        url: "week5/"
    },
    {
        label: "Week 6",
        url: "week6/"
    },
    {
        label: "Week 7",
        url: "week7/"
    }
]

function displayLinks() {
    var list = "";
    for (i = 0; i < links.length; i++){
        list += "<li><a href=\"" + links[i].url + "\">" + links[i].label + "</a></li>"
    }
    $('#table').html(list);
}