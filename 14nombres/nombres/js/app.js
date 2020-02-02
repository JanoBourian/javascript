// Vamos a leer el submit del formulario
document.getElementById('generar-nombre').addEventListener('submit', cargarNombres);

//Aquí preparamos todo para la consulta
function cargarNombres(e) {
    e.preventDefault();
    // Leer las variables del formulario (select)
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    //Select para el genero
    // Leer las variables del formulario (select)
    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    //Vamos con la cantidad
    const cantidad = document.getElementById('numero').value;

    // Según la API debemos construir la url de consulta para obtener lo solicitado
    // de la forma correcta
    let url = '';
    url += 'http://uinames.com/api/?';

    //Si hay origen agregarlo a la URL
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }

    //Ahora para el género
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }

    //Ahora para la cantidad
    if (cantidad !== '') {
        url += `amount=${cantidad}&`;
    }

    //Llamado a AJAX e imprimir resultados
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (this.status === 200) {
            //console.log(JSON.parse(this.responseText));
            const nombres = JSON.parse(this.responseText);
            let htmlNombres = '<h2> Nombres Generados </h2>';
            htmlNombres += ' <ul class="lista">';
            nombres.forEach(function(nombre) {
                htmlNombres += `
                <li>${nombre.name}</li>
                `;
            });
            htmlNombres += '</ul>';
            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    };
    xhr.send();
}