class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.saldo = saldo
    }
    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de ${this.saldo}`
    }
    tipoCliente() {
            let tipo;
            if (this.saldo > 1000000) {
                tipo = 'Platinum'
            } else if (this.saldo > 100000 && this.saldo <= 1000000) {
                tipo = 'Gold'
            } else {
                tipo = 'Normal'
            }
            return tipo;
        }
        //Los métodos estáticos no necesitan ser instanciados
    static bienvenida() {
        return `Hola, buenas tardes`;
    }
}

const francisco = new Cliente('Francisco', 'González', 999999999);
console.log(francisco.imprimirSaldo());
console.log(francisco.tipoCliente());
console.log(Cliente.bienvenida());

/* +++++++++++++++++++ */
/* Herencias de clases */
/* +++++++++++++++++++ */

class Empresa extends Cliente {
    constructor(nombre, apellido, saldo, telefono, tipo) {
        // Va hacia el constructor Padre
        super(nombre, apellido, saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
    static bienvenida() {
        return `Hola, estás en el cajero para empresas.`;
    }
}

const empresa = new Empresa('Empresa', 'Social', 10000, 234560595, 'Constructora');
console.log(empresa.tipoCliente());
console.log(empresa.imprimirSaldo());