let urlPlayer = "https://api.football-data.org/v2/teams/"

loadPlayers(17)

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
