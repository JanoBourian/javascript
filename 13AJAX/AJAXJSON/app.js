/* Para empleado */

const boton1 = document.getElementById('boton1');
boton1.addEventListener('click', function() {
    const xhr = new XMLHttpRequest;
    xhr.open('GET', 'empleado.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const persona = JSON.parse(this.responseText);
            const templateLiteral = `
            <ul>
                <li>Nombre: ${persona.nombre} </li>
                <li>Empresa: ${persona.empresa} </li>
                <li>Actividad: ${persona.trabajo} </li>
                <li>Id: ${persona.id} </li>
            </ul>
            `;
            document.getElementById('empleado').innerHTML = templateLiteral;
        }
    }
    xhr.send();
});

/* Para empleados */

const boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function() {
    const xhr2 = new XMLHttpRequest;
    xhr2.open('GET', 'empleados.json', true);
    xhr2.onload = function() {
        if (this.status === 200) {
            const personal = JSON.parse(this.responseText);
            let templateEmpleados = '';
            personal.forEach(function(persona) {
                templateEmpleados += `
                <ul>
                    <li>Nombre: ${persona.nombre} </li>
                    <li>Empresa: ${persona.empresa} </li>
                    <li>Actividad: ${persona.trabajo} </li>
                    <li>Id: ${persona.id} </li>
                </ul>
                `;
            })
            document.getElementById('empleados').innerHTML = templateEmpleados;
        }
    }
    xhr2.send()
});