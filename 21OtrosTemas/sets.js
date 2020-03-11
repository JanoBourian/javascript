// Lista de valores sin duplicados. 
let carrito = new Set();
console.log(carrito);
console.log(carrito.size);
carrito.add('Camisa');

console.log(carrito.size);
//Comprobar que valor exista
console.log(carrito.has('Camisa'));

carrito.delete('Camisa');

//vaciar el set
carrito.clear();

//Iterar el set, el index también será el nombre en el SET
carrito.forEach((producto)=>{
    console.log(producto);
});

//Convertir set a arreglo

const arregloCarrito = [...carrito];