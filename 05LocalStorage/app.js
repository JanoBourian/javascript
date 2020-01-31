/* +++++++++++++ */
/* Local Storage */
/* +++++++++++++ */

//Agregar al local storage
localStorage.setItem('nombre', 'Juan');

//Obtener el valor de local storage
const name = localStorage.getItem('nombre');
console.log(name);

//Eliminar de local storage
localStorage.removeItem('nombre', 'Juan');

//Eliminar todo junto
localStorage.clear();

/* ++++++++++++++ */
/* Sesion Storage */
/* ++++++++++++++ */

//Agregar al sesion storage
sessionStorage.setItem('nombre', 'Damián');