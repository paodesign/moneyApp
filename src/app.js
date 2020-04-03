/*const listaGastos = [
    { id: 1, desc: 'comida', monto: 100 },
    { id: 2, desc: 'ropa', monto: 800 },
    { id: 3, desc: 'nafta', monto: 1000 }
]

window.onload = init;
function init() {
    botonEnviar = document.getElementById("btn");
    nuevoItem = document.getElementById("anadir");
    listaCompras = document.getElementById("listaCompra");

    botonEnviar.addEventListener("click", anadir);
}

function anadir(e) {
    evento = e || window.event;
    if (nuevoItem.value == "") {
        evento.preventDefault();
    } else {
        var lista = document.createElement("li");
        lista.innerHTML = nuevoItem.value;
        lista.addEventListener("dblclick", eliminarLi);/
        listaCompras.appendChild(lista);
        nuevoItem.value = "";
    }
}

function eliminarLi(){
    this.parentNode.removeChild(this);
}*/
(function () {
var formulario = document.formulario_registro;
var elementos = formulario.elements;

var validarInputs = function () {
    for (var i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "text") {
            let small = document.getElementById(`alerta_${elementos[i].name}`);
            if (elementos[i].value == 0) {
                small.className += " mostrar";
                elementos[i].className = elementos[i].className + " error";
                return false;
            } else {
                elementos[i].className = elementos[i].className.replace(" error", "");
                small.className = small.className.replace(" mostrar", "");
            }
        }
    }
    return true;
};

var  enviar = function(e){
    if (!validarInputs()) {
        console.log('Falto validar los Input');
        e.preventDefault();
    }else{
        console.log('Envia');
        e.preventDefault();
    }
}

//eventns
formulario.addEventListener("submit", enviar);

}())