//Variables para la base de datos
let DB;


//Selectores de la interfaz
const form = document.querySelector('form'),
       nombreMascota = document.querySelector('#mascota'),
       nombreCliente = document.querySelector('#cliente'),
       telefono = document.querySelector('#telefono'),
       fecha = document.querySelector('#fecha'),
       hora = document.querySelector('#hora'),
       sintomas = document.querySelector('#sintomas'),
       citas = document.getElementById('citas'),
       headingAdministra = document.querySelector('#administra');

// Esperar el DOM ready porque es necesario que el DOM esté cargado
document.addEventListener('DOMContentLoaded', ()=>{
    //Crear la base de datos
    let crearDB = window.indexedDB.open('citas', 1); //Nombre y versión

    //Si hay un error enviarlo a la consola
    crearDB.onerror = function(){
        console.log('Hubo un error');
    }

    //Si todo esta bien se muestra una alerta
    crearDB.onsuccess = function(){
        console.log("Todo listo");

        //Asignar a la base de datos
        DB= crearDB.result;
        console.log(DB);

        //Borrar las citas
        mostrarCitas();
    }

    // Este método solo corre una vez y es ideal para crear el SCHEMA
    crearDB.onupgradeneeded = function(e){
        //El evento es la misma base de datos
        let db = e.target.result; // Esto nos da la base de datos
        console.log("Sólo una vez!");
        console.log(db);

        //Definir el objectstore, nombre de la base de datos y segundo las opciones
        //keyPath es el índice de la base de datos
        let objectstore = db.createObjectStore('citas', {keyPath:"key", autoIncrement:true});

        //Crear índex y campos de la base de datos: nombre, keyPath y opciones
        objectstore.createIndex('mascota', 'mascota', {unique:false});
        objectstore.createIndex('cliente', 'cliente',{unique:false});
        objectstore.createIndex('telefono', 'telefono',{unique:false});
        objectstore.createIndex('fecha', 'fecha',{unique:false});
        objectstore.createIndex('hora', 'hora',{unique:false});
        objectstore.createIndex('sintomas', 'sintomas',{unique:false});       
    }

    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e){
        e.preventDefault();
        const nuevaCita = {
            mascota  : nombreMascota.value,
            cliente  : nombreCliente.value, 
            telefono : telefono.value,
            fecha    : fecha.value,
            hora     : hora.value,
            sintomas : sintomas.value
        }
        console.log(nuevaCita);

        // En idexedDB se utilizan las transacciones
        let transacciones = DB.transaction(['citas'],'readwrite');
        let objectStore = transacciones.objectStore('citas');

        //Enviar petición
        let peticion = objectStore.add(nuevaCita);
        console.log(peticion);

        //Cuando la petición sea exitosa
        peticion.onsuccess = () =>{
            form.reset();
        }

        //Cuando la transacción se complete
        transacciones.oncomplete = ()=>{
            console.log("Cita agregada");
            mostrarCitas();
        }

        transacciones.onerror = ()=>{
            console.log("HUbo un error");
        }
    }

    //Mostrar citas (hace el query a la base de datos)
    function mostrarCitas(){
        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }

        //Crear Object Store
        let objectStore = DB.transaction('citas').objectStore('citas');
        
        //Este retorna un petición
        objectStore.openCursor().onsuccess = function(e){
            //Cursor se va a ubicar en el registro indicado
            let cursor = e.target.result;
            console.log(cursor);

            //comprobar que exista un cursor
            if(cursor){
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = `
                    <p class= "font-weight-bold"> Mascota: <span class="font-weight-normal">
                        ${cursor.value.mascota}
                    </span></p>

                    <p class= "font-weight-bold"> Dueño: <span class="font-weight-normal">
                        ${cursor.value.cliente}
                    </span></p>

                    <p class= "font-weight-bold"> Telefono: <span class="font-weight-normal">
                        ${cursor.value.telefono}
                    </span></p>

                    <p class= "font-weight-bold"> Fecha: <span class="font-weight-normal">
                        ${cursor.value.fecha}
                    </span></p>

                    <p class= "font-weight-bold"> Hora: <span class="font-weight-normal">
                        ${cursor.value.hora}
                    </span></p>

                    <p class= "font-weight-bold"> Síntomas: <span class="font-weight-normal">
                        ${cursor.value.sintomas}
                    </span></p>
                `;

                //Boton de borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = '<span aria-hidden= "true"> X</span> Borrar';
                botonBorrar.onclick =borrarCita;
                citaHTML.appendChild(botonBorrar);

                 //Apend al padre
                citas.appendChild(citaHTML);
                //continua con los registros
                cursor.continue();
            }else{
                if(!citas.firstChild){
                    //Cuando no hay registros 
                    let listado = document.createElement('p');
                    headingAdministra.textContent = "Agregar citas para comenzar";
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                }else{
                    headingAdministra.textContent = "Administra tus citas";
                }
            }

           
        }
    }

    function borrarCita(e){
        let citaID =Number( e.target.parentElement.getAttribute('data-cita-id'));
        // En idexedDB se utilizan las transacciones
        let transacciones = DB.transaction(['citas'],'readwrite');
        let objectStore = transacciones.objectStore('citas');
        
        //Enviar petición
       objectStore.delete(citaID);

        transacciones.oncomplete = ()=>{
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            if(!citas.firstChild){
                //Cuando no hay registros 
                let listado = document.createElement('p');
                headingAdministra.textContent = "Agregar citas para comenzar";
                listado.classList.add('text-center');
                listado.textContent = 'No hay registros';
                citas.appendChild(listado);
            }else{
                headingAdministra.textContent = "Administra tus citas";
            }
        }
    }

});