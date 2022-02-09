let urlTeams = "http://api.football-data.org/v2/competitions/2002/teams"
let urlPlayer = "http://api.football-data.org/v2/players/44"

function loadTeams(){

fetch(urlTeams, {
    headers: {
        "X-Auth-Token": "01b439ba1f9e45c79423f4f92b5087d5"
    },
    type: "GET",
})
    .then(response => response.json())
    .then(function (data) {
        let html = "";
        data.teams.forEach(element => {
            html += "<li>" + element.name + "</li>";

        });
        document.getElementById("teams").innerHTML = html
    });
}
fetch(urlPlayer, {
    headers: {
        "X-Auth-Token": "01b439ba1f9e45c79423f4f92b5087d5"
    },
    type: "GET",
})
    .then(response => response.json())
    .then(function (data) {
        let html = "";
        data.name.forEach(element => {
            html += "<li>" + element + "</li>";

        });
        document.getElementById("players").innerHTML = html
    });
