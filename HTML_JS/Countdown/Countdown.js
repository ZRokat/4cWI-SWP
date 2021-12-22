function start(){
    var time = parseInt(document.getElementById("time").value)
    while ( time != 0){
        setTimeout(countDown, 1000)
        time--
    }
}

function countDown(){
    var time = parseInt(document.getElementById("time").value)
    time --;
    document.getElementById("output").innerHTML = time;
}