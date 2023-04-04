// POO - Paradigma de programación orientada a objetos: //
//-- Clases --// Es la plantilla con la que creo objetos

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;

        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    };

    verInfo (){
        document.getElementById("demo18.4").innerHTML = this.info + "<br>";
    };

    //Polimorfismo
    ladrar(){
        if (this.especie == "perro") {
            document.getElementById("demo18.6").innerHTML = "¡Guau, Guau!!!<br>";
        } else {
            document.getElementById("demo18.6").innerHTML = "No puedo ladrar porque no soy un perro, soy un " + this.especie + "<br>";
        }
    };
};

// let perro = new Animal();
// perro.especie = 'Perro';
// perro.edad = 5;
let perro = new Animal("perro", 5, "rojo");

// console.log(perro);
document.getElementById("demo18.0").innerHTML = perro.info

let gato = new Animal("gato", 8, "blanco");
let elefante = new Animal("elefante", 35, "gris");
let loro = new Animal("loro", 1, "verde");

document.getElementById("demo18.1").innerHTML = gato.info;
document.getElementById("demo18.2").innerHTML = elefante.info;
document.getElementById("demo18.3").innerHTML = loro.info;


elefante.verInfo();
gato.verInfo();

document.getElementById("demo18.5").innerHTML = 'Perro:  ' + perro.info;

// perro.ladrar();
gato.ladrar();



class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = raza;
    };

    // modificarRaza(){
    //     this.raza = 'Mongrel';
    // };

    set setRaza(newName){
        this.raza = newName;
    };

    get getRaza(){
        return this.raza;
    };

    //Método Estático
    static ladrar(){
        document.getElementById("demo18.9").innerHTML = "Yo si soy un perro y puedo ladrar desde mi método estático, ¡Bark, bark!! <br>";
    };

};

Perro.ladrar();

let perrito = new Perro("perro", 1, "Blue Merlé", "Criollo")
document.getElementById("demo18.6").innerHTML = perrito.color;

// perrito.modificarRaza();
// document.getElementById("demo18.7").innerHTML = perrito.raza;

perrito.setRaza = "Akita";

document.getElementById("demo18.7").innerHTML = perrito.raza;
document.getElementById("demo18.8").innerHTML = perrito.getRaza;



//-- Abstracción --// Reducir la clase a su mínima expresión
//-- Modularidad --// Separar los problemas en parte
//-- Polimorfismo --// Comportamiento segun el objeto
//-- Herencia --// Pasar infomración de una clase a una clase hija


