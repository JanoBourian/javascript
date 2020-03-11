function *crearGenerador(){
    // yield
    yield 1;
    yield 'Nombre';
    yield false;
}

const iterador = crearGenerador();
iterador.next().value;