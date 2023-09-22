//


interface IProducto {
    nombre: string;
    precio: number;
}
const carritoFilter: IProducto [] = [
    {nombre: 'Notebook MSI', precio: 16000},
    {nombre: 'Mouse Razer', precio: 2000},
    {nombre: 'Audifonos Razer', precio: 1000},
    {nombre: 'Monitor Asus', precio: 200
];

const resultadoFilter = carritoFilter.filter( (elementoProducto: IProducto) => elementoProducto.precio < 1000);
console.log(resultadoFilter);