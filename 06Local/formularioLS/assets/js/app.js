/* Variables */

const listaTareas = document.getElementById('lista-tweets');

/* EventListeners */

eventListeners();

function eventListeners() {
    //Cuando se envía el formulario
    document.getElementById('formulario').addEventListener('submit', agregarTarea);

    //Borrar tweets
    listaTareas.addEventListener('click', borrarTarea);

    //COntenido cargado
    document.addEventListener('DOMContentLoaded', localStorageListo);
}

/* Funciones */

//Cuando se da click al botón de enviar
function agregarTarea(e) {
    e.preventDefault();
    //Leer el valor del textArea
    const tarea = document.getElementById('tweet').value;

    //Crear elementos
    crearElementosLista(tarea);

    //Agregar Tarea al localStorage
    agregarTareaLocalStorage(tarea);

    //Para que se borre el TextArea
    document.getElementById('tweet').value = '';
}

//Para borrar la tarea se usó delegation
function borrarTarea(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        // Borrar desde localStorage
    }
}

//Agregar tarea al localStorage
function agregarTareaLocalStorage(tarea) {
    let tareas;

    //Obtener Local Storage
    tareas = obtenerLocalStorage();

    //Añadir el tweet
    tareas.push(tarea);

    //Convertir de string a arreglo para localStorage
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

//Obtener elementos y si no crear el arreglo
function obtenerLocalStorage() {
    let tareas;
    //Revisamos los valores de localSotare
    if (localStorage.getItem('tareas') === null) {
        tareas = [];
    } else {
        tareas = JSON.parse(localStorage.getItem('tareas'));
    }
    return tareas;
}

//Cuando el documento se carga completo y se ponen los datos en el html
function localStorageListo() {
    let tareas;
    tareas = obtenerLocalStorage();
    tareas.forEach(function(tarea) {
        crearElementosLista(tarea);
    });
}

function crearElementosLista(tarea) {
    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    //Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';
    li.innerText = tarea;

    //Añade el botón de borrar a la lista
    li.appendChild(botonBorrar);

    // Ahora agregamos al DOM con Traversing
    listaTareas.appendChild(li);
}