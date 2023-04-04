//JS HTML DOM

//Encontrar elementos HTML
//getElementById()
const elemento = document.getElementById("demo19.0");

document.getElementById("demo19.1").innerHTML = 
"Como programador " + elemento.innerHTML; 


//getElementsByTagName()
const elemento1 = document.getElementsByTagName("div");

document.getElementById("demo19.2").innerHTML = 
"HTML tiene etiquetas como esta:  " + elemento1[2].innerHTML; 

//getElementsByClassName()
const elemento2 = document.getElementsByClassName("encabezado");

document.getElementById("demo19.3").innerHTML = 
"Las clases, " + elemento2[0].innerHTML;

//querySelectorAll()
const elemento3 = document.querySelectorAll("p.encabezado");

document.getElementById("demo19.4").innerHTML = 
"Son uds? " + elemento3[2].innerHTML;


//Cambio de contenido en HTML
//innerHTML NO hay ejemplo, porque ya lo usamos

//Cambiar el valor del atributo
document.getElementById("image").src = "img/Estudiohtml.png"; 

document.getElementById("image").width = '200'; 

//Cambiar estilos CSS
document.getElementById("demo19.5").style.color = "blue";
document.getElementById("demo19.5").style.backgroundColor = "yellow";
document.getElementById("demo19.6").style.fontFamily = "Arial";
document.getElementById("demo19.6").style.fontSize = "larger";

//Cambiar estilos CSS con un evento
function danger(){
    document.getElementById("demo19.7").style.color = "red";
    document.getElementById("demo19.7").style.fontSize = "larger";
};

//Visibilidad
function desaparece(){
    document.getElementById("demo19.8").style.visibility = "hidden";
};

function aparece(){
    document.getElementById("demo19.8").style.visibility = "visible";
};


//Animación JS HTML DOM
function mover(){
    let identifica = null;
    const elemento4 = document.getElementById("animado");
    let posicion = 0;

    clearInterval(identifica);
    identifica = setInterval(paso, 5);

    function paso(){
        if(posicion == 350){
            clearInterval(identifica);
        } else{
            posicion = posicion + 1;
            elemento4.style.top = posicion + "px"
            elemento4.style.left = posicion + "px"
        };
    };
};


//Eventos JavaScript HTML DOM
//Haciendo click en el texto
function cambio(){
    document.getElementById("demo19.9").innerHTML = "Los borraste.";
}

//onfocus
function resaltar(obj){
    obj.style.background = "rgb(255, 243, 71)";
}


//Esta función me valida los datos de entrada del formulario

function validarDatos(){
    let nombre = document.forms["inscripcion"]["nombreCompleto"].value;
    if (nombre == ""){
        alert("El nombre debe ser diligenciado");
        return false;
    }
}

//Validar número ingresado
function validarNum(){
    let numero = document.getElementById("number").value;
    let resp = null;

    if (isNaN(numero) || numero < 1 || numero > 10){
        resp = "Dato incorrecto";
    }else{
        resp = "Muy bien, lo lograste";
    }

    document.getElementById("respuesta").innerHTML = resp;
}




