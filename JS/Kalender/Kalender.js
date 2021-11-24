var id = 1;
var idString = id.toString();
var monthId = 0;
const months = [
    {"name": "Januar", "days": 31},
    {"name": "Februar", "days": 28},
    {"name": "März", "days": 31},
    {"name": "April", "days": 30},
    {"name": "Mai", "days": 31},
    {"name": "Juni", "days": 30},
    {"name": "Juli", "days": 31},
    {"name": "August", "days": 31},
    {"name": "September", "days": 30},
    {"name": "Oktober", "days": 31},
    {"name": "November", "days": 30},
    {"name": "Dezember", "days": 31},
    ]
var offset = 4;
var nextOffset = 0;
var lastOffset = 0;

function nextDay() {
    id++;
    idString = id.toString();
}

function startCalendar() {
    document.getElementById("month").innerHTML = months[monthId].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        lastOffset++;
        nextDay();
    }
    for (let trueDays = 1; trueDays <= months[0].days; trueDays++){
    document.getElementById(idString).innerHTML = trueDays;
    nextDay();
    }
    while (id <= 42){
        if (id <= 35){ 
            nextOffset++;
            console.log(nextOffset);  
        }
        document.getElementById(idString).innerHTML = "-";
        nextDay();
    }
}

function previousMonth(){
    if (monthId != 0){
        monthId--;   
    let offsetAlreadySet = false;
    offset = lastOffset;
    lastOffset = 0;
    nextOffset = 0;
    id = 1;
    idString = id.toString();
    document.getElementById("month").innerHTML = months[monthId].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        lastOffset++;
        nextDay();
    }
    for (let trueDays = 1; trueDays <= months[monthId].days; trueDays++){
    document.getElementById(idString).innerHTML = trueDays;
    nextDay();
    }
    while (id <= 42){
        if (id <= 35){
            
            console.log(nextOffset);
            offsetAlreadySet = true;
        }
        if (offsetAlreadySet == false){
            console.log(nextOffset);
        }
        document.getElementById(idString).innerHTML = "-";
        nextDay();        
    }
    }
}


function nextMonth(){
    if (monthId != 11){
        monthId++;  
    let offsetAlreadySet = false;
    offset = nextOffset;
    nextOffset = 0;
    id = 1;
    idString = id.toString();
    
    document.getElementById("month").innerHTML = months[monthId].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        lastOffset++;
        nextDay();
    }
    for (let trueDays = 1; trueDays <= months[monthId].days; trueDays++){
    document.getElementById(idString).innerHTML = trueDays;
    nextDay();
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
        nextDay();
        
    }
}
}

startCalendar();