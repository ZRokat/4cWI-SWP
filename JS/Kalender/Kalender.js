var month = 0
var id = 1;
var idString = id.toString();
var days = 30;
const months = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Detember"]
var offset = 4;
var nextOffset = 0;

function startCalendar(offset) {
    document.getElementById("month").innerHTML = months[month];
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        id++;
        idString = id.toString();
    }
    for (let trueDays = 1; trueDays <= days; trueDays++){
    document.getElementById(idString).innerHTML = trueDays;
    id++;
    idString = id.toString();
    }
    while (id <= 42){
        if (id <= 35){ 
            nextOffset++;
            console.log(nextOffset);  
        }
        document.getElementById(idString).innerHTML = "-";
        id++;
        idString = id.toString(); 
    }
}

function previousMonth(){
        if (month != 0){
            month --;   
        }
        document.getElementById("month").innerHTML = months[month];
        while (offset > 0){
            document.getElementById(idString).innerHTML = "-";
            offset--;
            id++;
            idString = id.toString();
        }
        for (let trueDays = 1; trueDays <= days; trueDays++){
        document.getElementById(idString).innerHTML = trueDays;
        id++;
        idString = id.toString();
        }
        while (id <= 42){
            if (id <= 35){
                offset++;
            }
            if (id > 35 && id < 42){
                offset++;
            }
            document.getElementById(idString).innerHTML = "-";
            id++;
            idString = id.toString();
            
        }
    }


function nextMonth(){
    offset = nextOffset;
    id = 1;
    idString = id.toString();
    if (month != 11){
        month ++;   
    }
    document.getElementById("month").innerHTML = months[month];
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        id++;
        idString = id.toString();
    }
    for (let trueDays = 1; trueDays <= days; trueDays++){
    document.getElementById(idString).innerHTML = trueDays;
    id++;
    idString = id.toString();
    }
    while (id <= 42){
        if (id <= 35){
            nextOffset++;
        }
        if (id > 35 && id < 42){
            nextOffset++;
        }
        document.getElementById(idString).innerHTML = "-";
        id++;
        idString = id.toString();
        
    }
}

startCalendar(offset);