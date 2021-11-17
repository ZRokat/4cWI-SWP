var month = 0
var id = 1;
var idString = id.toString();
var offset = 1;
var days = 31;
const months = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Detember"]


function startCalendar() {
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

function previousMonth(){
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

startCalendar();