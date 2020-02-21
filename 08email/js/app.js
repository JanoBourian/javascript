//Constantes o variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const resetBtn = document.getElementById('resetBtn');

//EventListeners

eventListeners();

function eventListeners(){
    //Inicio de la aplicación 
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //Botón de enviar en el submit
    btnEnviar.addEventListener('click', enviarEmail);

    //Resetear contenido
    resetBtn.addEventListener('click', borrarCampos);
}


//Funciones

function inicioApp(){
    btnEnviar.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo(){
    
    //Se valida la longitud del texto y que no esté vacío
    validarLongitud(this);

    //Validar únicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');

    if(email.value !== '' && asunto.value !== '' && mensaje.value!==''){
        if(errores.length === 0){
            btnEnviar.disabled = false;       
        }
    }
}


//Cuando se envía el correo
function enviarEmail(e){
    e.preventDefault();
    //Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';

    //Gif que envia el email
    const enviado = document.createElement('img');
    enviado.src='img/mail.gif';
    enviado.style.display = 'block';

    //Ocultar spinner y luego GIF de enviado
    setTimeout(function(){
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(
            function(){
                enviado.remove()
                borrarCampos();
            }
            , 4000);
    }
        ,2000);
}

//Verifica la longitud del texto en los campos
function validarLongitud(campo){
    if(campo.value.length >0){
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = "red"
        campo.classList.add('error');
    }
}

//Verifica el correo
function validarEmail(campo){
    if(campo.value.indexOf('@') !== -1){
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = "red"
        campo.classList.add('error');
    }
}


//Borrar todos los campos

function borrarCampos(){
    email.value= '';
    asunto.value='';
    mensaje.value= '';
    btnEnviar.disabled = true;  
}