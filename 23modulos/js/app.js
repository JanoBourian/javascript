import {nombreCliente, ahorro, mostrarInformacion, Cliente}from './cliente.js';
import {nombreEmpresa, ahorro as ahorroEmpresa, categoria, mostrarInformacion as mostrarInformacionEmpresa, Empresa} from './empresa.js';

console.log(nombreCliente);
console.log(ahorro);
console.log(nombreEmpresa);
console.log(ahorroEmpresa);
console.log(categoria);

const info = mostrarInformacion(nombreCliente, ahorro);
console.log(info);

let empresa = new Empresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(empresa.mostrarInformacion());

const infoEmpresa = mostrarInformacionEmpresa(nombreEmpresa, ahorroEmpresa, categoria);
console.log(infoEmpresa);

//Utilizar la clase
let cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());