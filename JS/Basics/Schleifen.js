console.log("Schleifen: ")

for(let num= 7; num <= 45; num++){
    console.log(num);
}

for(let num= 9; num <= 99; num++){
    console.log(num);
}

for(let num = 10; num >= 0; num--){
    console.log(num);
}

for(let num = 1234; num >=1207; num--){
    console.log(num);
}

for (let count = 0; count <=7; count++){
    console.log("Eric");
}

for (let count = 0; count <= 10; count++){
    console.log(count);
    if (count == 10){
        console.log("Eric")
        for(let count2 = 10;count2 >=0;count2--){
            console.log(count2);
        }
    }
}

function generateRandomNumber(maxNum){
    var random = Math.random() * maxNum;
    var randomNum = Math.round(random);
    console.log(randomNum)
    return randomNum;
}



var num1 = generateRandomNumber(100);
var num2 = generateRandomNumber(100);

if(num1 < num2 && num1 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

if(num1 < 30 || num2 < 30){
    console.log(" Eine der beiden ist kleiner als 30")
}

if (num1 < 50 && num2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}


switch(generateRandomNumber(5)+5){
    case 5:
        console.log("Five");
        break;
    case 6:
        console.log("Six");
        break;
    case 7:
        console.log("Seven");
        break;
    case 8:
        console.log("Eight");
        break;
    case 9:
        console.log("Nine");
        break;
    case 10:
        console.log("Ten");
        break;
}

var binary = 2
for(let y = 0; y <=3; y++){
    
for(let x = 0; x <=3; x++){

    let letter = "X";
    if(binary % 2 == 0){
        letter = "X";
    } else{
        letter = "O";
    }

        document.write(letter); 
    }
    binary++;
    document.write("<br>");
}
writeBR();

var summe = 0;
for(let x = 0; x <=100; x++){
    if (x % 2 == 0){
        summe += x;
    }
    console.log(summe);
}


function writeX(){
    document.write("X");
}

function writeBR(){
    document.write("<br>");
}

function writeSpace(){
    document.writeln("&ensp;");
}

function printE(){
    for (let x = 0; x<= 5; x++){
        switch(x){
            case 0: 
                for(let y = 0; y <= 4; y++){
                    writeX();
                }
                writeBR();
                break;
            
            case 1:
                writeX();
                writeBR();
                break;
            case 2:
                for(let y = 0; y <= 4; y++){
                    writeX();
                }    
                writeBR();
                break;
            case 3:
                writeX();
                writeBR();
                break;
            case 4:
                for (let y = 0; y<= 4; y++){
                    writeX();
                }    
                writeBR();
                break;
                    
        }
    }
    writeBR();
}

function printR(){
    for (let x = 0; x<= 5; x++){
        switch(x){
            case 0: 
                for(let y = 0; y <= 4; y++){
                    writeX();
                }
                writeBR();
                break;
            
            case 1:
                for(let y = 0; y <= 4; y++){
                    if (y == 0 || y == 4){
                        writeX();
                    } else {
                        writeSpace();
                    }
                }
                writeBR();
                break;
            case 2:
                for(let y = 0; y <= 3; y++){
                    writeX();
                }    
                writeBR();
                break;
            case 3:
                for(let y = 0; y <= 4; y++){
                    if (y == 0 || y == 3){
                        writeX();
                    } else {
                        writeSpace();
                    }
                    
                }
                writeBR();
                break;
            case 4:
                for (let y = 0; y<= 4; y++){
                    if (y == 0 || y == 4){
                        writeX();
                    } else {
                        writeSpace();
                    }
                }    
                writeBR();
                break;
                    
        }
    }
    writeBR();
}


function printI(){
    for (let x = 0; x<= 4; x++){
        writeX();
        writeBR();
    }
    writeBR();
}

function printC(){
    for (let x = 0; x<= 4; x++){
        switch(x){
            case 0:
                for (let y = 0; y <=4; y++){
                    writeX();
                }
                writeBR();
                break;
            case 1:
                writeX();
                writeBR();    
                break;
            case 2:
                writeX();
                writeBR();
                break;
            case 3:
                writeX();
                writeBR();
                break;
            case 4:
                for (let y = 0; y <=4; y++){
                    writeX();
                }
                writeBR();
                writeBR();
                break;            
        }
    }
}

printE();
printR();
printI();
printC();