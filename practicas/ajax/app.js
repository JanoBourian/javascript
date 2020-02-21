//Variables y constantes
const btnDatos = document.getElementById('datos');

//EventListeners
eventListeners();

function eventListeners(){
    btnDatos.addEventListener('click', traerDatos);
}

//Funciones
function traerDatos(e){
    e.preventDefault();
    cargarTexto();
}

//Funcion AJAX
function cargarTexto(){
    //Cargar el http, crear el objeto.
    const xhr = new XMLHttpRequest();

    // Abrir conexión
    xhr.open('GET', 'empleado.JSON', true);

    //Verificar que todo esté cool
    xhr.onload = function(){
        if(this.status === 200){
            const persona = JSON.parse(this.responseText);
            const templateLiteral=`
            <ul>
                <li> ${persona.nombre} </li>
                <li> ${persona.apellido} </li>
                <li> ${persona.edad} </li>
            </ul>
            `;
            document.getElementById('mensaje').innerHTML = templateLiteral;
        }
    }

    //Siempre hay que enviar el request
    xhr.send();
}