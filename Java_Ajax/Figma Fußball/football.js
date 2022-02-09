let urlPlayer = "http://api.football-data.org/v2/players/44"

function loadTeams(){
    let urlTeams = "http://api.football-data.org/v2/competitions/2002/teams"
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
            html += "<li> <button class='teamsButton' type='button' onclick='loadPlayers();'>" + element.name + "</button></li>";
        });
        document.getElementById("teams").innerHTML = html
    });
}

function loadPlayers(teamId){
    fetch(urlPlayer + teamId,{
        headers:{
            "X-Auth-Token":"01b439ba1f9e45c79423f4f92b5087d5"
        },
        type:"GET",
    } )
    .then(response => response.json())
    .then(function (data) {
        let html = "";
        data.squad.forEach(player => {
            html += "<li>" + player.name + "</li>";
    
          });
          document.getElementById("players").innerHTML = html
    });
}