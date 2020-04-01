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