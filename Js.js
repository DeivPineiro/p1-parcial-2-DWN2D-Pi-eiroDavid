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
    tarjeta.setAttribute("class", "tarjeta");
    tarjeta.setAttribute("id", unProducto.id)
    listaProductos.appendChild(tarjeta);

    //titulo
    const tituloTarjeta = document.createElement('h3');
    tituloTarjeta.innerText = unProducto.nombre;
    tarjeta.appendChild(tituloTarjeta);

    //imagen
    const imagenProducto = document.createElement('img');
    imagenProducto.setAttribute("src", "producto-de-ejemplo.jpg");
    imagenProducto.setAttribute("alt", "producto-de-ejemplo");
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

    //Boton
    const botonAgregar = document.createElement('button');
    botonAgregar.setAttribute("class", "botonAgregar");
    botonAgregar.setAttribute("id", unProducto.id)
    botonAgregar.setAttribute("onclick", "Agregar(this.id);");
    botonAgregar.innerText = "Agregar al carrito";
    tarjeta.appendChild(botonAgregar);

});









/* Generar el div#modalProducto y su contenido dinámicamente
        <div class="modal" id="modalProducto">
            <a class="cerrar" href="javascript:void(0)">X</a>
            <img src="producto-de-ejemplo.jpg" alt="Nombre del producto" />
            <h3>Producto</h3>
            <p>Descripción</p>
            <p>Precio: <span>$0</span></p>
            <p>Categoría</p>
            <button>Agregar</button>
        </div> */






//Funcion agregar al carro
const carrito = [];
const Agregar = (e) => {

    let Id = e;

    productos.forEach(unProducto => {



        if (Id == unProducto.id) {
            //div   
            const tarjetaProd = document.createElement('div');
            tarjetaProd.setAttribute("class", "modal");
            tarjetaProd.setAttribute("id", unProducto.id)
            listaProductos.appendChild(tarjetaProd);

            //Link Cerrar
            const cerrarTarjetaProd = document.createElement('a');
            cerrarTarjetaProd.setAttribute("class", "cerrar");
            cerrarTarjetaProd.setAttribute("href", "cerrarModal();");
            cerrarTarjetaProd.innerText = "X";
            tarjetaProd.appendChild(cerrarTarjetaProd);

            //Imagen
            const imagenProd = document.createElement('img');
            imagenProd.setAttribute("src", "producto-de-ejemplo.jpg");
            imagenProd.setAttribute("alt", "producto-de-ejemplo");
            tarjetaProd.appendChild(imagenProd);

            //Titulo
            const tituloTarj = document.createElement('h3');
            tituloTarj.innerText = unProducto.nombre;
            tarjetaProd.appendChild(tituloTarj);

            //Descripcion
            const descripcionProd = document.createElement('p');
            descripcionProd.innerText = unProducto.descripcion;
            tarjetaProd.appendChild(descripcionProd);

            //precio
            const precioProd = document.createElement('p')
            precioProd.innerText = "Precio: " + unProducto.precio;
            tarjetaProd.appendChild(precioProd);

            //Categoria
            const categoriaProd = document.createElement('p')
            categoriaProd.innerText = "Categoria: " + unProducto.categoría;
            tarjetaProd.appendChild(categoriaProd);

            //Boton
            const botonAdd = document.createElement('button');
            botonAdd.setAttribute("class", "botonAdd");
            botonAdd.setAttribute("id", unProducto.id)
            botonAdd.setAttribute("onclick", "agregarCarrito(this.id);");
            botonAdd.innerText = "Agregar al carrito";
            tarjetaProd.appendChild(botonAdd);


        }
    })

    const div = document.getElementsByClassName('#modal');

    console.log(div);

    const agregarCarrito = (a) => {

        const Id = a;

        productos.forEach(unProducto => {
            if (Id == productos.id) {

                carrito.push(unProducto);

            }

        });
       

    }


}



/*
const cerrarModal = () => {

const div = getElementById('#modal');





}
*/





//console.log(carrito);
