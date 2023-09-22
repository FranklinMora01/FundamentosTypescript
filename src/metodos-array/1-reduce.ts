// Reduce, es un metodo que es un acumulador, toma una cantidad de datos y retorna el resultado
//acumulado

interface IProducto {
    nombre: string;
    precio: number;
}
const carrito: IProducto [] = [
    {nombre: 'Notebook MSI', precio: 1600000},
    {nombre: 'Mouse Razer', precio: 50000},
    {nombre: 'Audifonos Razer', precio: 30000},
    {nombre: 'Monitor Asus', precio: 300000}
];

//callback es una funcion que se pasa por parametro a otra funcion
const resultadoReduce = carrito.reduce( (total: number, product: IProducto) => total + product.precio, 0);

console.log(resultadoReduce);