class Interfaz {

    //constructor
    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect(){
        cotizador.obtenerMonedasAPI()
            .then(monedas =>{
                //Crear un select de opciones
                const select = document.querySelector('#criptomoneda');
                for(const[key,value] of Object.entries(monedas.Data)){
                    //Añadir el symbol y el Nombre como opciones
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                } 
            })
    }

    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //Seleccionar mensajes 
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);
        //mostrar contenido

        setTimeout(function(){
            document.querySelector('.mensajes div').remove();
        },3000);
    }

    //Imprime el resultado de la cotización
    mostrarResultado(resultado, moneda, criptomoneda){
        const datosMoneda = resultado[criptomoneda][moneda];

        let precio = datosMoneda.PRICE.toFixed(2);
        let actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');

        //Construir el template
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light>
                    <h2 class ="card-title"> Resultado: </h2>
                    <p> El precio de: ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: ${precio}</p>
                    <p> Variación último día: ${datosMoneda.CHANGEPCTDAY.toFixed(2)}</p>
                    <p> Última actualización: ${actualizado}</p>
                </div>
            </div>
        `;
        //Insertar el resultado
        document.querySelector('#resultado').innerHTML = templateHTML;
    }
}