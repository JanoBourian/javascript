//Constantes
const alturaPagina = window.innerHeight;
const hero = document.getElementById('hero');
const btnEnviar = document.getElementById('enviarFormulario');

export function eventListeners(){
    //Sólo para checar que el contenido fue cargado
    document.addEventListener('DOMContentLoaded', function(){
    });
    //Para cargar el documento
    inicio();
}


//Funciones
function inicio(){
    hero.style.height = `${alturaPagina - 66}px`;
    let fecha = new Date().getFullYear();
    document.getElementById('year').innerText = fecha;
    btnEnviar.disabled=true;
}

//Validar los campos y cambiar de color
//Función para controlar los estilos de los campos
export function eventBlur(){
    //validar campos del formulario
    validarCampos();    
    if(this.value !== "" && this.value.length > 3){
        if(this.type === 'email'){
            if(email.value.indexOf("@")===-1 ){
                this.style.border="4px solid red";
            }else{
                this.style.border="4px solid #AAE8E7";
            }
        }else{
            this.style.border="4px solid #AAE8E7";
        }
    }else{
        this.style.border="4px solid red";
    }
}


//Función para activar o desactivar el botón de enviar
function validarCampos(){
    if(email.value.indexOf("@")!==-1 && name.value !==""  && lastName.value !==""  && email.value !=="" && mensaje.value !==""){
        btnEnviar.disabled = false;
    }
}

