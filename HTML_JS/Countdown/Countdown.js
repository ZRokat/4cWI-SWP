var timer;
function start(){
    clearInterval(timer);
    var time = parseInt(document.getElementById("time").value)
    document.getElementById("output").innerHTML = time 
    timer = setInterval(function(){        
        time--;     
        document.getElementById("output").innerHTML = time   
        if (time <= 0){
                time = 0;
                clearInterval(timer);
                }   
            },1000);
            
}
