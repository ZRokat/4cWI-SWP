function generate() {
    var num1 = parseInt(document.getElementById("firstNumber").value)
    var num2 = parseInt(document.getElementById("secondNumber").value)
    
    var displayNumber = Math.round(Math.random()*(num2 - num1)) + num1


    document.getElementById("output").innerHTML = displayNumber
}