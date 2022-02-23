export class Person {
    constructor(Name, Nachname){
        this.Name = Name;
        this.Nachname = Nachname
    }

    sayHello(){
        console.log("hi "+ this.Name + " " + this.Nachname)
    }
    
}

export class Animal {

}