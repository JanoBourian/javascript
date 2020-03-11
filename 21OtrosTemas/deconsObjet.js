const cliente = {
    nombre : 'Alejandra',
    tipo   : 'premium'
}

let nombre, tipo; 

( {nombre, tipo } = cliente);


// Acceso más avanzado

const Persona = {
    nombre: 'Luis',
    tipo: 'normal',
    datos: {
        ubicacion : {
            ciudad: 'GDL',
            paid:'MX'
        },
        cuenta:{
            desde : '020220',
            saldo : 4000
        }
    }
}

let { datos: {ubicacion}} = Persona;
