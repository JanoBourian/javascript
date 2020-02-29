//Exportar variables
export const nombreCliente = 'Fernando Vallejo';
export let ahorro = 1000; 

//Exportar funciones
export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`
}

//Exportar una clase
export class Cliente{
    constructor(nombre, ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion(){
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}. Desde una clase`
    }
}
