/* +++++++++++++++++++++ */
/* Eventos para el mouse */
/* +++++++++++++++++++++ */

// Agregando el evento click
document.getElementById('btn-click').addEventListener('mouseenter', elemento);

function elemento(e) {
    let elemento;
    elemento = e.target.innerText;
    e.target.style.background = 'gold';
    console.log(elemento);
}

document.getElementById('elemento').addEventListener('mousemove', movimientos);

function movimientos(e) {
    let movimientos = document.getElementById('p-elemento');
    movimientos.innerText = e.type;
}

// Otros eventListeners
// dblclick  : doble click
// mouseenter:
// mouseleave:
// mouseover :
// mouseout  :
// mousedown :
// mouseup   :
// mousemove :

/* +++++++++++++++++++++++ */
/* Eventos para los Inputs */
/* +++++++++++++++++++++++ */

const busqueda = document.getElementById('buscador');
busqueda.addEventListener('keypress', obtenerEvento);

function obtenerEvento(e) {
    console.log(busqueda.value);
    console.log(e.type);
    let p = document.getElementById('p-busqueda');
    p.innerText = busqueda.value;
}

// keyup    : cada que sueltas la tecla
// keypress : cada vez que escribes algo
// focus    : cuando estás en el lugar --> ideal para resaltar la caja
// blur     : cuando da click afuera se pueden validar los datos
// cut      : 
// copy     :
// paste    :
// input    : todo en uno
// change   : pendiente de los cambios

/* ++++++++++++++ */
/* Event Bubbling */
/* ++++++++++++++ */

// Sucede cuando hay eventos en elementos anidados
// e.stopPropagation(); evita que el evento se propague

/* ++++++++++ */
/* Delegation */
/* ++++++++++ */

// e.target.classList.contains()
/*
    if(e.target.classList.contains('clase-aqui')){
        console.log("Sí");
    }
*/
// Traversin : e.target.parentElement.parentElement.remove();