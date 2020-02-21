//Variables
const btnGenerar = document.getElementById('generar');
let templateHTML = '';
const traerLocalStorage = document.getElementById('localSBtn');

//Eventlisteners
eventListeners();

function eventListeners(){
    //Evento al botón de generar
    btnGenerar.addEventListener('click', generarDatos);

    //Botón para traer localStorage al template
    traerLocalStorage.addEventListener('click', imprimirLocalStorage);
}


//Funciones

//Función que inicializa la generación de datos
function generarDatos(e){
    e.preventDefault();
    peticionAJAX();
}

//Función que realiza la petición a AJAX
function peticionAJAX(){
    //Creamos el http, creación del objeto
    const xhr = new XMLHttpRequest();

    //Abrimos una conexión
    xhr.open('GET', 'datos.JSON', true);

    xhr.onload = function(){
        if(this.status ===200){
            const datos = JSON.parse(this.responseText);
            templateHTML ='';
            datos.forEach(function(dato, index){
                templateHTML +=`
                <div class="col p-2 border border-danger m-1">
                    <h3> ${dato.name}</h3>
                    <p class="work"> ${dato.work}</p>
                    <p class="city"> ${dato.city}</p>
                    <p class="credit"> ${dato.card}</p>
                    <p type="button" class="btn btn-outline-success" id="${index}" onclick="agregar(${index})">Add</p>
                </div>
                `;
            });
            document.getElementById("insertar").innerHTML = templateHTML;
        }
    }

    //Enviar el request
    xhr.send();
}

//Función para agregar a local Storage
function agregar(index){
    const elemento = document.getElementById(index);

    // Aquí creamos los elementos para construir el string que se agregará a localStorage
    let agregar;
    //Cada uno de los datos del usuario
    let nombre = elemento.parentElement.querySelector("h3").textContent;
    let work = elemento.parentElement.querySelector(".work").textContent;
    let city = elemento.parentElement.querySelector(".city").textContent;
    let credit = elemento.parentElement.querySelector(".credit").textContent;
    agregar = `{"name":"${nombre}", "work":"${work}", "city":"${city}", "credit":"${credit}"}`;

    agregarLocalStorage(agregar);
    //Se elimina del DOM
    elemento.parentElement.remove();
}

//Función para agregar a LocalStorage

function agregarLocalStorage(dato){

    //Traemos lo que haya en localStorage
    let lista = obtenerLocalStorage();

    //Agregamos los datos de la persona a LS
    lista.push(dato);

    localStorage.setItem('personas', JSON.stringify(lista));
}


//Obtener localStorage
function obtenerLocalStorage(){
    let personasLS;

    //Comprobamos si hay algo en LocalStorage
    if(localStorage.getItem('personas')===null){
        personasLS =[]
    }else{
        personasLS = JSON.parse(localStorage.getItem('personas'));
    }
    return personasLS;
}

//Imprimir localStorage

function imprimirLocalStorage(){
    document.getElementById('insertar').innerHTML = '';
    templateHTML= '';
    let personas = obtenerLocalStorage();
    personas.forEach(function(persona,index){
        persona = JSON.parse(persona);
        console.log(persona);
        templateHTML +=`
                <div class="col p-1 border border-success m-1">
                    <h3> ${persona.name}</h3>
                    <p class="work"> ${persona.work}</p>
                    <p class="city"> ${persona.city}</p>
                    <p class="credit"> ${persona.credit}</p>
                    <p type="button" class="btn btn-outline-danger" id="${index}" onclick="eliminar(${index})">Remove</p>
                </div>
                `;
            });
    document.getElementById("insertar").innerHTML = templateHTML;
}