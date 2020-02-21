/* ++++++++++++++ */
/* Object literal */
/* ++++++++++++++ */

const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: function() {
        let tipo;
        if (this.saldo > 5000) {
            tipo = 'Platinum'
        } else if (this.saldo < 5000 && this.saldo > 1000) {
            tipo = 'Gold'
        } else {
            tipo = 'Normal'
        }
        return tipo;
    }
}

console.log(cliente.tipoCliente());

/* ++++++++++++++++++ */
/* Object before ECMA */
/* ++++++++++++++++++ */

function Usuario(nombre = 'Usuario', saldo = 0) {
    // Esto es con un constructor
    this.nombre = nombre,
    this.saldo = saldo,
    this.tipoUsuario = function() {
        let tipo;
        if (this.saldo > 5000) {
            tipo = 'Platinum'
        } else if (this.saldo < 5000 && this.saldo > 1000) {
                tipo = 'Gold'
        } else {
            tipo = 'Normal'
        }
        return tipo;
    }
}

const persona = new Usuario('Pedro', 999999);
const persona2 = new Usuario();
console.log(persona.tipoUsuario());
console.log(persona2.nombre);

/* +++++++++++++++++++++++++++++ */
/* Otras formas de constructores */
/* +++++++++++++++++++++++++++++ */

const frase = new String('Jumento');
console.log(frase);

const listas = new Array(12, 30, 90, 58);
console.log(listas);

/* Para crear otros primitivos: 
new Number(20);
new Boolean(true);
new Function('a','b','return a+b');
new Object({clave:valor});
new Array(1,2,3,4);
*/

/* ++++++++++ */
/* Prototipos */
/* ++++++++++ */

// Esto ya no se utiliza

function Jugador(nombre, nivel) {
    this.nombre = nombre,
    this.nivel = nivel
}

//Crear un prototipo
Jugador.prototype.tipoJugador = function() {
    let nivel;
    if (this.nivel > 30) {
        nivel = 'Avanzado';
    } else if (this.nivel <= 30 && this.nivel > 10) {
        nivel = 'Intermedio';
    } else {
        nivel = 'Inicial'
    }
    return nivel;
}

//Prototipo 
Jugador.prototype.datos = function() {
    return `Nombre: ${this.nombre}, Tu nivel: ${this.nivel}, Tipo de Jugador = ${this.tipoJugador()}`;
}

//Prototipo reiniciar nivel
Jugador.prototype.reiniciar = function() {
    this.nivel = 0;
    return `El nivel de ${this.nombre} ahora es ${this.nivel}`;
}

//Prototipo actualizar nivel
Jugador.prototype.actualizarNivel = function(nivel) {
    this.nivel = nivel;
    return `El nivel de ${this.nombre} ahora es ${this.nivel}`;
}

//Imprimiendo valores
const jugador1 = new Jugador('Domingo', 20);
console.log(jugador1);
console.log(jugador1.tipoJugador());
console.log(jugador1.datos());
console.log(jugador1.reiniciar());
console.log(jugador1);
jugador1.actualizarNivel(1000);
console.log(jugador1.tipoJugador());
console.log(jugador1.datos());

/* ++++++++++++++++++++++ */
/* Herencia de prototipos */
/* ++++++++++++++++++++++ */

function Master(nombre, nivel, id, liga) {
    /* Vamos a heredar esto de Jugador en la siguiente linea 
    this.nombre = nombre,
        this.nivel = nivel,
        */
    Jugador.call(this, nombre, nivel),
        this.id = id,
        this.liga = liga
}
Master.prototype = Object.create(Jugador.prototype);
const mediador = new Master('Fernando', 10000, 1233404, 'Nevada');
console.log(mediador);
console.log(mediador.tipoJugador());

/* +++++++++++++ */
/* Object create */
/* +++++++++++++ */

// Vamos a hacer un ejemplo que podría ayudarnos a crear protos ECMA5

const ClienteBanco = {
    imprimirSaldo: function() {
        return `Hola ${this.name} tu saldo actual es de: ${this.saldo}`;
    },
    retirarSaldo: function(retiro) {
        this.saldo -= retiro
        return `Hola ${this.name} tu saldo ahora es de: ${this.saldo}`;
    }
}

const mary = Object.create(ClienteBanco);
mary.name = 'Mary';
mary.saldo = 11000;
console.log(mary);
console.log(mary.imprimirSaldo());
console.log(mary.retirarSaldo(200));