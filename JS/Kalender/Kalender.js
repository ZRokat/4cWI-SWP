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

const lastOffsetArray = []
var offset = 1;
var nextOffset = 0;
var lastOffset = 0;
var savedLastOffset = 0

function nextDay() {
    id++;
    idString = id.toString();
}

function reduceOffsetSavelastOffset (){
    offset--;
    lastOffset++;
}

function resetOffsetsAndId(){
    lastOffset = 0;
    nextOffset = 0;
    id = 1;
    idString = id.toString();
}

function startCalendar() {
    document.getElementById("month").innerHTML = months[monthId].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        reduceOffsetSavelastOffset();
        nextDay();
        console.log(lastOffset + "Last")
    }
    lastOffsetArray.push(lastOffset);
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
    offset = lastOffsetArray[monthId];
    resetOffsetsAndId();
    document.getElementById("month").innerHTML = months[monthId].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        offset--;
        console.log(lastOffset + "Last")
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


function nextMonth(){
    if (monthId != 11){
        monthId++;  
    let offsetAlreadySet = false;
    offset = nextOffset;
    resetOffsetsAndId();
    document.getElementById("month").innerHTML = months[monthId].name;
    while (offset > 0){
        document.getElementById(idString).innerHTML = "-";
        reduceOffsetSavelastOffset();
        console.log(savedLastOffset + "saved")
        console.log(lastOffset + "Last")
        nextDay();
    }
    lastOffsetArray.push(lastOffset);
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