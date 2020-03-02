//Variables para la base de datos
let DB;

//Selectores de la Interfaz
const form = document.getElementById('formulario'),
      nombre = document.getElementById('name'),
      correo = document.getElementById('email'),
      hora = document.getElementById('hora'),
      fecha = document.getElementById('fecha'),
      mensaje = document.getElementById('mensaje'),
      section = document.getElementById('listaRegistros');

//Para trabajar con IndexedDB es necesario que el DOM esté listo
document.addEventListener('DOMContentLoaded', ()=>{

//Aquí crearemos la función principal que igual podría
//estar dentro del evento
    //Crear la base de datos
    //nombre de la base de datos y versión
    let crearDB = window.indexedDB.open('registros', 1);

    //Si hay error en la creación será necesario enviarla 
    //a la consola
    crearDB.onerror = function(){
        console.log("hubo un error al cargar la base de datos");
    }

    //Si todo está bien mostremos una alerta
    crearDB.onsuccess = function(){
        //Mensaje
        console.log("la base de datos se cargó correctamente");
        //Poner los resultados en la variable DB
        DB = crearDB.result;
        //Ver qué hay dentro de DB
        console.log(DB);

        //Borrar las citas
        mostrarCitas();
    }

    //Creemos el SCHEMA de la base de datos

    crearDB.onupgradeneeded = function (e){
        //El evento es la misma base de datos
        let dataBase = e.target.result //Esto nos da la base de datos
        console.log("Sólo una vez!");
        console.log(dataBase);
                
        //Definir el objectstore, nombre de la base de datos y segundo las opciones
        //keyPath es el índice de la base de datos
        let objectStore = dataBase.createObjectStore('registros', {keyPath:"key", autoIncrement:true});
        
        //Crear índex y campos de la base de datos: nombre, keyPath y opciones
        objectStore.createIndex('name', 'name', {unique:false});
        objectStore.createIndex('email', 'email', {unique:false});
        objectStore.createIndex('hora', 'hora', {unique:false});
        objectStore.createIndex('fecha', 'fecha', {unique:false});
        objectStore.createIndex('mensaje', 'mensaje', {unique:false});
    }

    //Ahora lo siguiente es agregar los datos
    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e){
        //Recuerda que e es el evento mismo
        e.preventDefault();

        // Aquí obtenemos los datos del registro
        const nuevoRegistro ={
            name   : nombre.value,
            email  : correo.value,
            hora   : hora.value,
            fecha  : fecha.value,
            mensaje: mensaje.value
        }
        console.log(nuevoRegistro);

        //En indexedDB se utilizan las transacciones 
        //Traemos la base de datos
        let transacciones = DB.transaction(['registros'], 'readwrite');
        let objectStore = transacciones.objectStore('registros');

        //Enviar peticion
        let peticion = objectStore.add(nuevoRegistro);
        console.log(peticion);

        //Cuando petición es exitos
        peticion.onsuccess = ()=>{
            form.reset();
        }

        //Cuando se complete la transacción
        transacciones.oncomplete = ()=>{
            console.log("Cita agregada");
            mostrarCitas();
        }

        //Si hay error con la transacción
        transacciones.onerror = () =>{
            console.log("Hubo un error");
        }
    }

    function mostrarCitas(){
        while(section.firstChild){
            section.removeChild(section.firstChild);
        }

        let objectStore = DB.transaction('registros').objectStore('registros');
        objectStore.openCursor().onsuccess = function (e){
            //Cursor se va a ubicar en el registro indicado
            let cursor = e.target.result;
            console.log(cursor);

            //Comprobar que exista el cursor y comenzar
            if(cursor){
                let citaHTML = document.createElement('li');
                //Para preparar el boton de borrar
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.innerHTML = `
                <h3> ${cursor.value.key} </h3>
                <p> ${cursor.value.name} </p>
                <p> ${cursor.value.email}</p>
                <p> ${cursor.value.hora}</p>
                <p> ${cursor.value.fecha}</p>
                <p> ${cursor.value.mensaje}</p>
                `;
                section.appendChild(citaHTML);
                //Boton de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.innerHTML='<span aria-hidden= "true"> X</span> Borrar';
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);
                cursor.continue();
            }
        }
    }

    function borrarCita(e){
        let citaID = Number(e.target.parentElement.getAttribute('data-cita-id'))
        // En idexedDB se utilizan las transacciones
        let transacciones = DB.transaction(['registros'],'readwrite');
        let objectStore = transacciones.objectStore('registros');
        
        objectStore.delete(citaID);

        transacciones.oncomplete = ()=>{
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
        }
    }
});
