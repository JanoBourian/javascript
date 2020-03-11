// 
const exp1 = new RegExp('/abc/');
const exp2 = /abc/;
console.log(exp1);
console.log(exp2);

const numeros = /[0123456789]/; // [0-9], [a-z], [A-Z]
let valor = 1992;
numeros.text(valor);


//Una fecha en exp regular 20-10-2018 \D es para buscar algo que no sea dígito
// \d+ <--- Espera dígitos, muchos más.
const expRed = /\d\d-\d\d-\d\d\d\d/;
// Otra forma
// expRed = /\d{1,2}-\d{1,2}-\d{4}/;
valor = "20-10-2018";

console.log(expRed.test(valor));

// Negar la expresión regular 
expReg = /[^0-9]/;
valor = 1992;
console.log(expReg.text(valor));

//Letras o números
expReg = /\w+/; //<--- únicamente números o letras
valor = 'Mensaje de prueba';
console.log(expReg.test(valor));

//Espera números únicamente
expReg = /([0-9])\w+/;
