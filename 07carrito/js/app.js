//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

//Listeners

cargarEventListeners();

function cargarEventListeners(){
    //Dispara cuando se presiona "Agregar carrito"
    cursos.addEventListener('click', comprarCurso);

    //Cuando se elimina un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Al vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Cuando se cargue el documento mostrar localStorage
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}


//Funciones

//Función que ñade el curso al carrito
function comprarCurso(e){
    e.preventDefault();
    //Delegation para agregar carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para tomar sus datos
        leerDatosCurso(curso);
    }

}

//Lee los datos del curso
function leerDatosCurso(curso){
    //Crear objeto para almacenar los datos le curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCurso(infoCurso);
}

//Muestra el curso seleccionado en el carrito
function insertarCurso(curso){
    const row =  document.createElement('tr');
    row.innerHTML = `
        <td> 
            <img src="${curso.imagen}" width="100px">
        </td>
        <td>
            ${curso.titulo}
        </td>
        <td> 
            ${curso.precio}
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
        </td>
    `;
    listaCursos.appendChild(row);

    //Almacenar en LocalStorage
    guardarCursoLocalStorage(curso);
}

//Función de eliminar curso del carrito en el DOM
function eliminarCurso(e){
    e.preventDefault();

    let curso;
    let cursoId;

    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');
    }
    eliminarCursoLocalStorage(cursoId);
}

//Función para vaciar carrito, elima los cursos en el DOM
function vaciarCarrito(e){
    //Forma Lenta
    //listaCursos.innerHTML = '';

    
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    
    //Vaciar LocalStorage
    vaciarLocalStorage();

    return false;
}

//Almacena cursos en el carrito al LocalStorage
function guardarCursoLocalStorage(curso){
    let cursosLS;

    //Arreglo con datos o vacío de LocalStorage
    cursosLS = obtenerCursoLocalStorage();

    //El curso seleccionado se agrega al arreglo
    cursosLS.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Obtener cursos de localStorage
function obtenerCursoLocalStorage(){
    let cursosLS;
    //comprobamos si hay algo en localStorage
    if(localStorage.getItem('cursos')===null){
        cursosLS = []
    } else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }

    return cursosLS;
}

// Imprime los cursos de Local Storage en el carrito
function leerLocalStorage(){
    let cursosLS;
    cursosLS = obtenerCursoLocalStorage();
    cursosLS.forEach(function(curso){
        //Construir el Template
        const row =  document.createElement('tr');
        row.innerHTML = `
            <td> 
                <img src="${curso.imagen}" width="100px">
            </td>
            <td>
                ${curso.titulo}
            </td>
            <td> 
                ${curso.precio}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>
        `;
        listaCursos.appendChild(row);
    });
}

//Eliminar el curso por el ID
function eliminarCursoLocalStorage(id){
    let cursosLS;
    cursosLS = obtenerCursoLocalStorage();
    cursosLS.forEach(function(curso, index){
        if(curso.id === id){
            cursosLS.splice(index, 1);
        }
    });
    localStorage.setItem('cursos', JSON.stringify(cursosLS));
}

//Elimina todos los cursos de LocalStorage
function vaciarLocalStorage(){
    localStorage.setItem('cursos', []);
}