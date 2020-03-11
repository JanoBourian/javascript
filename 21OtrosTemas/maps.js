// Llave valor. También evita duplicados
let cliente = new Map();
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'premium');
console.log(cliente);
console.log(cliente.get('nombre'));

console.log(cliente.size);
console.log(cliente.has('tipo'));

//Borrar elemento del map
cliente.delete('nombre');
cliente.clear();

//Argumentos por default
const Paciente = new Map(
    [['nombre', 'paciente'],
     ['habitacion', 'no definido']]
);

Paciente.forEach((datos, index)=>{
    console.log(`${index}: ${datos}`);
})