var id = 1;
var idString = id.toString();
const months = [
    {"name": "Januar", "days": 30},
    "Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Detember"]
var offset = 4;
var nextOffset = 0;

function startCalendar() {
    document.getElementById("month").innerHTML = months[0].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        id++;
        idString = id.toString();
    }
    for (let trueDays = 1; trueDays <= months[0].days; trueDays++){
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
    let offsetAlreadySet = false;
    offset = nextOffset;
    nextOffset = 0;
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
            console.log(nextOffset);
            offsetAlreadySet = true;
        }
        if (offsetAlreadySet == false){
            nextOffset++;
            console.log(nextOffset);
        }
        document.getElementById(idString).innerHTML = "-";
        id++;
        idString = id.toString();
        
    }
}

startCalendar();