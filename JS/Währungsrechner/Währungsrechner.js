const conversions = [
    {"conversion": 1.13},
    {"conversion": 1}
]

function calculateCrncy(){
    var originMoney = document.getElementById("givenNumber").value
    var givenCrncy = conversions[document.getElementById("givenCurrency").value]
    var chosenCrncy = conversions[document.getElementById("chosenCurrency").value]
    var displayMoney = 0
    if (givenCrncy == chosenCrncy){
        displayMoney = originMoney
    }
    
    displayMoney = Math.floor(givenCrncy.conversion * originMoney);

    document.getElementById("output").innerHTML = displayMoney;
    


}