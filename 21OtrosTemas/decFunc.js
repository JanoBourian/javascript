// Puedes mandar objetos a una función :D

function reservacion(completo, opciones){
    let {metodo, cantidad, dias} = opciones;

    if(completo){
        console.log(metodo);
        console.log(cantidad);
        console.log(dias);
        console.log("Proceder a reservar...");
    }else{
        console.log("Abandonar");
    }
}

reservacion(
    true,
    {
        metodoPago: 'credito',
        cantidad: 2000,
        dias: 3
    }
);

/*
/// POR DEFAULT

function reservacion(completo,{
    metodo = 'efectivo',
    cantidad = 0,
    dias = 0
    } = {}
    ){
        console.log(metodo);
        console.log(cantidad);
        console.log(dias);
    }

    reservacion(false, {});

*/