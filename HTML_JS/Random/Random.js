var r = Math.random()*1000;
var randomNumber = Math.round(r)

if (randomNumber> 800){
    console.log("very Big")
}

if (randomNumber <800 && randomNumber > 500){
    console.log("big")
}

if (randomNumber <500 && randomNumber >200){
    console.log("medium")
}

if (randomNumber <200){
    console.log("small")
}

console.log(randomNumber)