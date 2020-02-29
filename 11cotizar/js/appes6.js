// Cotizador, constructor para seguro

class Seguro{
    constructor(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
    }

cotizarSeguro(){
    /*
        1 - Americano 1.15
        2 - Asiático 1.05
        3 - Europeo 1.35
    */
   let cantidad;
    const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }

    //Leer el año
    const diferencia = new Date().getFullYear() - this.anio;

    for(let i = 0; i < diferencia; i++){
        cantidad = cantidad - cantidad*0.03;
    }

    /*
        Si el seguro es básico se multipica por 30% más
        Si el seguro es completo se multiplica por 50%
    */
   if(this.tipo=== "basico"){
        cantidad = cantidad * 1.3;
   }else{
        cantidad = cantidad * 1.5;
   }
   return cantidad;
}

}

class Interfaz{
//Mensaje que se imprime en HTML
mostarMensajeAlerta(mensaje, tipo){
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('mensaje', 'error');
    }else{
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML =`${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    setTimeout(function(){
        document.querySelector('.mensaje').remove();
    },3000);
}

//Imprirmi el resultado
mostrarResultado (seguro, cantidad){
    const resultado = document.getElementById('resultado');
    let marca;
    switch (seguro.marca) {
        case '1':
            marca = "Americano";
            break;
        case '2':
            marca = "Asiático";
            break;
        case '3':
            marca = "Europeo";
            break;
    }
    const div = document.createElement('div');
    div.innerHTML=`

        <p class='header'>Tu Resumen:</p>
        <p>Marca: ${marca};</p>
        <p>Año: ${seguro.anio};</p>
        <p>Tipo de seguro: ${seguro.tipo};</p>
        <p>Total $: ${Math.round(cantidad)};</p>
    `;
    const spinner = document.querySelector("#cargando img");

    setTimeout(function(){
        spinner.style.display = "none";
        resultado.appendChild(div);
    },3000);

    spinner.style.display = "block";
}

}


//Event listeners

const formulario = document.getElementById("cotizar-seguro");

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Leer la marca seleccionada del selected
    const marca = document.getElementById("marca");
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer año seleccionado
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;

    //Para un radio  button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    //Crear una instancia de interfaz. 
    const interfaz = new Interfaz();

    //Revisamos que los campos no estén vacíos
    if(marcaSeleccionada === '' || anioSeleccionado ==='' || tipo ===''){
        interfaz.mostarMensajeAlerta('Faltan datos, revisa el formulario', 'error');
    }else{

        //Evitar que se apilen las cotizaciones
        const resultados = document.querySelector('#resultado div');
        if(resultados !=null){
            resultados.remove();
        }

        //Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);

        //Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);

        //Mostrar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostarMensajeAlerta("Cotizando...", 'exito');
    }
});

// Imprimir una lista de selects

const max = new Date().getFullYear();
const min = max - 20;
const selectAnios = document.getElementById('anio');

for(let i = max; i >= min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}