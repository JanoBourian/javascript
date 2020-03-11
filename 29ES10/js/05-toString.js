//.toString()

function Automovil(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

Automovil.prototype.toString = function autoString(){
    const datos= `Auto: ${this.modelo} y color: ${this.color}`;
    return datos;
}

const auto = new Automovil("Camaro", "negro");
console.log(auto.toString());