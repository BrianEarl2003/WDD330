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
    },
    {
        label: "Week 8",
        url: "week8/"
    },
    {
        label: "Week 9",
        url: "week9/"
    },
    {
        label: "Week 10",
        url: "week10/"
    },
    {
        label: "Final Project",
        url: "FinalProject/"
    }
]

function displayLinks() {
    let list = "";
    for (i = 0; i < 6; i++){
        list += "<li><a href=\"" + links[i].url + "\">" + links[i].label + "</a></li>"
    }
    $('#table').html(list);
    let list2 = "";
    for (i = 6; i < links.length; i++){
        list2 += "<li><a href=\"" + links[i].url + "\">" + links[i].label + "</a></li>"
    }
    $('#table2').html(list2);
}