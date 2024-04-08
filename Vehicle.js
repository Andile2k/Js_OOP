class Vehicle{
    constructor(name, maker, engine)
    {
    this.name = name;
    this.maker = maker;
    this.engine = engine;

    }// end of constructor

    getDetails(){
        return ("The name of vehicle is: " + this.name)
    }
}

let sedan = new Vehicle('Chrysler', '300c SRT', '1.6LV8');

console.log(sedan.name);
console.log(sedan.maker);
console.log(sedan.engine);
console.log(sedan.getDetails());