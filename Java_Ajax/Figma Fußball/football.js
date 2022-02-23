let urlPlayer = "https://api.football-data.org/v2/teams/"
let urlTeams = "http://api.football-data.org/v2/competitions/2002/teams"


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
        let i = 1;
        data.teams.forEach(element => {
            html += "<li id='"+i+"'> <button class='teamsButton' type='button' onclick='loadPlayers("+i+")'>" + element.name + "</button></li>";
        i++;
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
            html += "<li class='players'>" + player.name + "</li>";
    
          });
          document.getElementById("teams").innerHTML = html
    });
}

function test(text){
    alert("hei "+ text)
}

function loadEvents(){
    fetch()
}