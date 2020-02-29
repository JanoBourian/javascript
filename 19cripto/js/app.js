//Instanciar las clases
const cotizador = new API('f6f82e3038f0844aabe6a18d977bb7dcbbd490222b6bcc8aba224e720920d2e6');
const ui = new Interfaz();

// Leer el formulario y validar
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Leer la moneda seleccionada
    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

    //Leer la criptomoneda seleccionada
    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

    //Comprobar que ambos campos estén seleccionados
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada===''){
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        ui.mostrarMensaje('Consultando la API', 'alert bg-success text-center');
        // Enviando una petición y obteniendo el resultado
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data =>{
                ui.mostrarResultado(data.RAW, monedaSeleccionada, criptoMonedaSeleccionada);
                //console.log(data);
            });
    }
});