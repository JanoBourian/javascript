const totalPaises = document.getElementById("total-paises");
const mexicoTexto = document.getElementById("card-mexico");
const opciones = document.getElementById("selection");
const paisTexto = document.getElementById("card-pais");
const btnChecar = document.getElementById("checar");
const listaPaises = document.getElementById("lista-paises");
let datosGlobales;
btnChecar.addEventListener('click', traerDatos);

let mexicoHTML  = '';
let paisHTML = '';

function cargarAPI(){
    fetch('https://api.covid19api.com/summary')
        .then(function(res){
                return res.json();
        })
        .then(function(datos){
                datosGlobales = datos;
                const datosC = datos.Countries;
                totalPaises.innerText =` ${datosC.length}`;
                /* Para méxico */
                datosC.forEach((dato)=>{
                    if(dato.Country === "Mexico"){
                        mexicoHTML +=`
                        <p class="card-text">New Confirmed: ${dato.NewConfirmed}</p>
                        <p class="card-text">Total Confirmed: ${dato.TotalConfirmed}</p>
                        <p class="card-text">NewDeaths: ${dato.NewDeaths}</p>
                        <p class="card-text">TotalDeaths: ${dato.TotalDeaths}</p>
                        <p class="card-text">New Recovered: ${dato.NewRecovered}</p>
                        <p class="card-text">TotalRecovered: ${dato.TotalRecovered}</p>
                        `;
                        mexicoTexto.innerHTML += mexicoHTML;
                    }
                    opciones.innerHTML += `
                    <option value="${dato.Country}"> ${dato.Country} </option>
                    `;
                });
                mostCountries();
        }).catch(function(error){
            console.log(error);
        });
}

function traerDatos(e){
    e.preventDefault();
    let paisHTML = '';
    paisTexto.innerHTML = '';
    const datosC = datosGlobales.Countries;
    datosC.forEach((dato)=>{
        if(dato.Country === opciones.value){
            paisHTML +=`
            <h3 class="card-title">${opciones.value}</h3>
            <p class="card-text">New Confirmed: ${dato.NewConfirmed}</p>
            <p class="card-text">Total Confirmed: ${dato.TotalConfirmed}</p>
            <p class="card-text">NewDeaths: ${dato.NewDeaths}</p>
            <p class="card-text">TotalDeaths: ${dato.TotalDeaths}</p>
            <p class="card-text">New Recovered: ${dato.NewRecovered}</p>
            <p class="card-text">TotalRecovered: ${dato.TotalRecovered}</p>
            `;
            paisTexto.innerHTML += paisHTML;
        }
    });
}
function mostCountries(){
    let array2;
    let casosConfirmados = [];
    const datosC = datosGlobales.Countries;
    datosC.forEach((dato)=>{
        array2 = [dato.Country, dato.TotalConfirmed];
        casosConfirmados.push(array2);
    });
    for( let i = 0; i<casosConfirmados.length; i++){
        for(let j = 0; j <(casosConfirmados.length-1); j++){
            if(casosConfirmados[j][1] < casosConfirmados[j+1][1]){
                array2= [casosConfirmados[j][0],casosConfirmados[j][1]];
                casosConfirmados[j]=casosConfirmados[j+1];
                casosConfirmados[j+1]=array2;
            }
        }
    }
    listaPaises.innerHTML = '';
    let listaHTML = '';
    for(let i = 0; i < 20; i++){
        listaHTML +=`
            <p> ${casosConfirmados[i][0]}: ${casosConfirmados[i][1]} </p>
        `;
    }
    listaPaises.innerHTML = listaHTML;
};

cargarAPI();