//import { UI } from "winjs";

const ui = new UI();

document.addEventListener('DOMContentLoaded',() =>{
    ui.mostrarEstablecimiento();
});

//Habilitar búsqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () =>{
    if(buscador.value.length > 5){
        ui.obtenerSugerencias(buscador.value);
    }else{
        ui.mostrarEstablecimiento();
    }
});