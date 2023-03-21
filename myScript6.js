//---- Funciones ----//

//Primera Forma

let numero1 = "Pedro";

function hacerSuma(numero1, numero2){
    let suma = numero1 + numero2;

    return suma
};

document.getElementById("demo6.0").innerHTML = hacerSuma(7, 3);

document.getElementById("demo6.1").innerHTML = numero1;


// Segunda Forma

hacerResta = function(numero1, numero2){
    let resta = numero1 - numero2;
    
    return resta
};

document.getElementById("demo6.2").innerHTML = hacerResta(9, 3);

document.getElementById("demo6.3").innerHTML = hacerResta(-9, -233);


//Tercera Forma

hacerMultiplicacion = (numero1, numero2) => {
    let multiplicar = numero1 * numero2;

    return multiplicar
};

document.getElementById("demo6.4").innerHTML = hacerMultiplicacion(-9, -233);


//Funciones anonimas
/*
function (){

};

() => {

};

*/



