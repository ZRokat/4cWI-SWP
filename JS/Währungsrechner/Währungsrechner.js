function calculateCrncy(){
    let originMoney = document.getElementById("givenNumber").value
    let givenCrncy = document.getElementById("givenCurrency").value
    let chosenCrncy = document.getElementById("chosenCurrency").value
    let displayMoney = 0
    if (givenCrncy == chosenCrncy){
        displayMoney = originMoney
    }

    document.getElementById("output").innerHTML = displayMoney;


}