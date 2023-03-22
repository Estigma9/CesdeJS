//--- JS Errors ---//
// try = Es el codigo que quiero que haga
// catch = Captura el error
// finally = Codigo que hace independiente del resultado
// throw = definición personalizada de mi error

function Prueba() {
    const message = "Has fallado";

    try {
        document.getElementById("demo12.0").innerHTML = "Lo logré hacer";
        
    } catch (e) {
        document.getElementById("demo12.1").innerHTML = "Has fallado";
    }
}

Prueba();





