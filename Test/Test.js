function calculate(){
    var height = parseInt(document.getElementById("height").value)
    var weight = parseInt(document.getElementById("weight").value)
    var result;

    Result = ((height * 1.43) / weight) -3.4;

    if (Result < 0){
        document.getElementById("output").innerHTML = "Negativ";
    }
    if (Result > 0){
        document.getElementById("output").innerHTML = "Positiv";
    }
    if (Result == 4){
        document.getElementById("output").innerHTML = " Positiv <br> 0,1,2,3,4";
    }
    if (Result == 2){
        document.getElementById("output").innerHTML = " Negativ <br> 0,-1,-2";
    }
    if (Result == 0) {
        document.getElementById("output").innerHTML = "Null";
    }


}