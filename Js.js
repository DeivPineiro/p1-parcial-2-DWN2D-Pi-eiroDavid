'use strict';

/*
 *  Piñeiro David
 */

let productos = [
    {
        id: 1,
        nombre: 'Producto 1',
        descripcion: 'Descripción del producto 1',
        precio: 10,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'A',
    },
    {
        id: 2,
        nombre: 'Producto 2',
        descripcion: 'Descripción del producto 2',
        precio: 20,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'A',
    },
    {
        id: 3,
        nombre: 'Producto 3',
        descripcion: 'Descripción del producto 3',
        precio: 30,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'B',
    },
    {
        id: 4,
        nombre: 'Producto 4',
        descripcion: 'Descripción del producto 4',
        precio: 40,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'B',
    },
    {
        id: 5,
        nombre: 'Producto 5',
        descripcion: 'Descripción del producto 5',
        precio: 50,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'C',
    },
    {
        id: 6,
        nombre: 'Producto 6',
        descripcion: 'Descripción del producto 6',
        precio: 60,
        imagen: 'producto-de-ejemplo.jpg',
        categoría: 'C',
    },

];

//const unProducto = productos[1];

//console.log(unProducto);

const listaProductos = document.getElementById("listaDeProductos");

productos.forEach(unProducto => {
//tarjeta
const tarjeta = document.createElement('div');
tarjeta.setAttribute ("class", "tarjeta");
tarjeta.setAttribute ("id", unProducto.id)
listaProductos.appendChild(tarjeta);

//titulo
const tituloTarjeta = document.createElement('h3');
tituloTarjeta.innerText = unProducto.nombre;
tarjeta.appendChild(tituloTarjeta);

//imagen
const imagenProducto = document.createElement('img');
imagenProducto.setAttribute ("src", "producto-de-ejemplo.jpg");
imagenProducto.setAttribute ("alt", "producto-de-ejemplo");
tarjeta.appendChild(imagenProducto);

//descripcion
const descripcionProducto = document.createElement('p');
descripcionProducto.innerText = unProducto.descripcion;
tarjeta.appendChild(descripcionProducto);

//precio
const precioProducto = document.createElement('p')
precioProducto.innerText = "Precio: " + unProducto.precio;
tarjeta.appendChild(precioProducto);

//Categoria
const categoriaProducto = document.createElement('p')
categoriaProducto.innerText = "Categoria: " + unProducto.categoría;
tarjeta.appendChild(categoriaProducto);

});

