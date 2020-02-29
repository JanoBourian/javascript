import {eventListeners} from './UI.js';
import {enviarFormulario} from './formAction.js';
import {collections} from './collections.js';

const enviar = document.getElementById('enviarFormulario');

enviar.addEventListener('click', enviarFormulario);

// Funciones traídas desde UI.js que es el diseño de la Interfaz
eventListeners();
collections();
