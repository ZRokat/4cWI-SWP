export default class Car{

    constructor(color, brand, country = "Austria"){
        this.color = color;
        this.brand = brand;
        this.country = country;
    }

    print(){
        console.log(this.color+ " - " + this.brand + " - " + this.country)
    }
}

let c1 = new Car("red", "Lambo", "Russland");
let c2 = new Car("blau", "VW");
