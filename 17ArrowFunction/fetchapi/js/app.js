document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBTN').addEventListener('click', cargarAPI);

function cargarTXT() {
    fetch('datos.txt') //Para resolver los datos
        .then((res) => res.text()) //Aquía accedemos
        .then((empleados) => (document.getElementById('resultado').innerHTML = empleados))
        .catch((error) => console.log(error));
}

/* Cargar un JSON */

function cargarJSON() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(empleados) {
            let html = '';
            empleados.forEach(function(empleado) {
                html += `
                <li> ${empleado.nombre}: ${empleado.puesto} </li>
                `;
            });
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
        })
}

/* Cargar desde REST API */

function cargarAPI() {
    fetch('https://picsum.photos/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(datos) {
            let html = ''
            datos.forEach(function(dato) {
                html += `
                <h3> ${dato.author} </h3>
                <a href="${dato.post_url}"> Ver imagen</a>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        }).catch(function(error) {
            console.log(error);
        });
}