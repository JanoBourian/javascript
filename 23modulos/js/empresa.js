import {Cliente} from './cliente.js';

//Exportar variables
export const nombreEmpresa = 'UDEMY';
export let ahorro = 1000000; 
export let categoria = 'Aprendizaje';

//Exportar funciones
export function mostrarInformacion(nombre, ahorro, categoria){
    return `Cliente: ${nombre} - Ahorro: ${ahorro} - Categoria: ${categoria}`;
}

//
export class Empresa extends Cliente{
    constructor(nombre, ahorro, categoria){
        super(nombre, ahorro);
        this.categoria = categoria;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria: ${this,categoria}`;
    }
}