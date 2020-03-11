function crearIterador(carrito){
    let i = 0;
    return{
        siguiente: () =>{
            let fin = (i >= carrito.length);
            let valor = !fin ? carrito[i++] : undefined;

            return {
                fin: fin,
                valor: valor
            }
        }
    }
}

const carrito = ['Produto1', 'Producto2'];
const recorrerCarrito = crearIterador(carrito);
recorrerCarrito.siguiente();