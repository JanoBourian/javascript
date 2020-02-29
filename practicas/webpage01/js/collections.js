export function collections(){
    let datos;
    let template =``;
    const table = document.getElementById('tabla-collections');
    datos = obtenerDatos();
    datos.forEach(function(dato,index){
        template += `
        <tr>
        <td scope="row">${index+1}</th>
        <td>${dato.name}</td>
        <td>${dato.lastName}</td>
        <td>${dato.email}</td>
        <td>${dato.mensaje}</td>
        <td class="btn btn-danger d-block btn-eliminar" onclick="borrarElemento(${index})"> X </td>
        </tr>
        `;
    });
    table.innerHTML = template;
}

function obtenerDatos(){
    let datos;
    //Revisamos LocalStorage
    if(localStorage.getItem('datosContacto')===null){
        datos = [];
    }else{
        datos = JSON.parse(localStorage.getItem('datosContacto'));
    }
    return datos;
}
