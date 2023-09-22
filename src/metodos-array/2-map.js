"use strict";
//el metodo map() crea un nuevo array, el array resultante tiene una modificacion por cada elemento del array devuelto. 
const numeros = [10, 20, 30, 40];
const resultado = numeros.map((elemento) => elemento * 2);
console.log(resultado);
const usuarios = [
    { id: 1, name: 'Pedro' },
    { id: 2, name: 'Juan' },
    { id: 3, name: 'Diego' }
];
//JSX
const resultadoJsx = usuarios.map((elementoUser) => `<li> ${elementoUser.name} </li>`);
console.log(resultadoJsx);
