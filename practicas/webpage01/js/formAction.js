import {Formulario} from './formulario.js';
import{eventBlur} from './UI.js';

const name = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviarFormulario');

name.addEventListener('blur', eventBlur);
lastName.addEventListener('blur', eventBlur);
email.addEventListener('blur', eventBlur);
mensaje.addEventListener('blur', eventBlur);
btnEnviar.addEventListener('click', enviarFormulario);


export function enviarFormulario(e){
    e.preventDefault();
    const Form = new Formulario(name.value, lastName.value, email.value, mensaje.value);
    Form.imprimirDatos();
    Form.subirDatos();
    //Recargar para borrar lo almacenado en la barra de dirección
    window.location.reload();
}

