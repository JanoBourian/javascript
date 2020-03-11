const ciudades = ['Londres', 'New York', 'Madrid', 'París',{
    idioma : 'ingles'
}];
const [
    primeraCiudad,
    segundaCiudad
] = ciudades;

const [,,,lastCiudad,] = ciudades; 

//Ejemplo más avanzado
const cliente ={
    tipo: 'premium',
    saldo: 3000,
    datos:{
        nombre: 'pedro',
        apellido: 'perez',
        residencia:{
            ciudad:'mx'
        }
    },
    movimientos :['2018', '2017', '2019']
}

let {
    datos:{ residencia}
} = cliente;

let {
    movimientos
} = cliente;

/*
let {
    movimientos : [,,reciente]
} = cliente;
*/