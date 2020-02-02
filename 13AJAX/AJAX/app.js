/* ++++++++++++++++ */
/* AJAX - Iniciando */
/* ++++++++++++++++ */

document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    //Cargar el http, crear el objeto 
    const xhr = new XMLHttpRequest(); //Para comunicarnos con AJAX
    //Abrir una conexión, Qué hace, URL, Llamado asíncrono
    xhr.open('GET', 'datos.txt', true);
    // Una vez que carga, también se hacía de otra formar
    /*
    xhr.onreadystatechange = function(){
        // ready status: 0 no inicializado, 1 conexión establecida
        // 2 recibido, 3 procesando, 4 respuesta lista.
        if(this.readyState === 4 && this.status === 200){
            console.log(this.resposeText);
        }
    }
    */
    xhr.onload = function() {
            // 200 : Correcto
            // 403 : Request prohibido
            // 404 : Not Found
            if (this.status === 200) {
                // Aquí es el responseText
                console.log(this.responseText);
                // Para imprimirlo en la página con template o string literal
                document.getElementById('listado').innerHTML = `<h1> ${this.responseText}</h1>`;
            }
        }
        //Enviar el request
    xhr.send();
}