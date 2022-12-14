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

//Funciones de filtrado

//Todos los productos

const fT = () => {

    let elemento = document.getElementById("listaDeProductos");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

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

}


//Filtrado A
const fA = () => {

    let elemento = document.getElementById("listaDeProductos");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
    productos.forEach(unProducto => {

        if (unProducto.categoría == "A") {



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
        }
    });


}

//filtrado Categoria B
const fB = () => {

    let elemento = document.getElementById("listaDeProductos");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

    productos.forEach(unProducto => {

        if (unProducto.categoría == "B") {



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
        }
    });

}
// Filtrado Categoria C
const fC = () => {

    let elemento = document.getElementById("listaDeProductos");
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }

    productos.forEach(unProducto => {

        if (unProducto.categoría == "C") {



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
        }
    });

}


//Funcion agregar al carro
//Agregar Carrito
const carrito = [];

const agregarCarrito = (a) => {

    const Id = a;

    productos.forEach(unProducto => {
        if (Id == unProducto.id) {

            carrito.push(unProducto);

        }

    });

    // Modificar precio mini carrito
    let miniTot = 0;
    const mCarr = document.getElementById("minicarrito");

    carrito.forEach(unProducto => {
        miniTot = miniTot + unProducto.precio;
    });

    const tMini = mCarr.querySelector(".pT");
    tMini.innerHTML = miniTot;

    const iMini = mCarr.querySelector(".iT");
    iMini.innerHTML = (parseInt(iMini.innerHTML) + 1);

}

/*const close = () => {


    //Vaciar pantalla
    
    //Cierro modal
    page.style.display = "none";
    

}*/

//Boton agregar que crea y abre modal

//div   
const tarjetaProd = document.createElement('div');

tarjetaProd.setAttribute("class", "modal");
tarjetaProd.setAttribute("id", "pageModal");
listaProductos.appendChild(tarjetaProd);
const page = document.getElementById("pageModal");
page.style.display = "none";

const Agregar = (e) => {

    let Id = e;

    productos.forEach(unProducto => {

        if (Id == unProducto.id) {


            //Link Cerrar
            const page = document.getElementById("pageModal");
            page.style.display = "block";
            const cerrarTarjetaProd = document.createElement('a');
            cerrarTarjetaProd.setAttribute("class", "cerrar");
            cerrarTarjetaProd.setAttribute("id", "cerrarModal");
            cerrarTarjetaProd.innerText = "X";
            tarjetaProd.appendChild(cerrarTarjetaProd);
            cerrarTarjetaProd.addEventListener("click", (event) => {


                //Vacio lo del modal para que  no me lo muestre nuevamente en el proximo OPEN
                let elemento = document.getElementById("pageModal");
                while (elemento.firstChild) {
                    elemento.removeChild(elemento.firstChild);
                }
                //Cierro modal
                page.style.display = "none";


            });


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
    });

    //Cerrar modal



}

// funcion eliminar item del carro
const eliminarItem = (e) => {

    const listaDeItems = document.getElementsByClassName("item");
    console.log(listaDeItems);

    for (let i = 0; i < listaDeItems.length; i++) {

        if (listaDeItems[i].id == e) {
            listaDeItems[i].remove();
            carrito.splice(e, 1);

        }


    }

}







const tarjetaCarr = document.createElement('div');
tarjetaCarr.setAttribute("class", "modal");
tarjetaCarr.setAttribute("id", "pageCarr")
listaProductos.appendChild(tarjetaCarr);
pageCarr.style.display = "none";


// Funcion Ver Carrito
const verCarrito = () => {


    let precioTotal = 0;
    let idItem = 0;
    //div   


    //Link Cerrar
    const pageCarr = document.getElementById("pageCarr");
    pageCarr.style.display = "block";
    const cerrarTarjetaCarr = document.createElement('a');
    cerrarTarjetaCarr.setAttribute("class", "cerrar");
    cerrarTarjetaCarr.setAttribute("id", "cerrarModal");
    cerrarTarjetaCarr.innerText = "X";
    tarjetaCarr.appendChild(cerrarTarjetaCarr);
    cerrarTarjetaCarr.addEventListener("click", (event) => {

        //actualizar minicarrito
        let miniTot = 0;
        let minIte = 0;
        const mCarr = document.getElementById("minicarrito");

        carrito.forEach(unProducto => {
            miniTot = miniTot + unProducto.precio;
            minIte++;
        });

        const tMini = mCarr.querySelector(".pT");
        tMini.innerHTML = miniTot;

        const iMini = mCarr.querySelector(".iT");
        iMini.innerHTML = minIte;


        let elemento = document.getElementById("pageCarr");
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }

        // Cerrar modal
        pageCarr.style.display = "none";


    });
    carrito.forEach(unProducto => {

        //div 
        const itemCarr = document.createElement('div');
        itemCarr.setAttribute("class", "item");
        itemCarr.setAttribute("id", idItem)
        tarjetaCarr.appendChild(itemCarr);

        //Titulo
        const tituloTarj = document.createElement('h3');
        tituloTarj.innerText = unProducto.nombre;
        itemCarr.appendChild(tituloTarj);

        //precio
        const precioProd = document.createElement('p')
        precioProd.innerText = "Precio: " + unProducto.precio;
        itemCarr.appendChild(precioProd);

        // eliminar 
        const eliminar = document.createElement('button');
        eliminar.setAttribute("class", "eliminarItem");
        eliminar.setAttribute("id", idItem);
        eliminar.setAttribute("onclick", "eliminarItem(this.id);");
        eliminar.innerText = "Eliminar Item";
        itemCarr.appendChild(eliminar);

        idItem++;
        precioTotal = precioTotal + unProducto.precio;




    });

    //precio total
    const precioTot = document.createElement('p')
    precioTot.innerText = "Precio Total: " + precioTotal;
    tarjetaCarr.appendChild(precioTot);


    const listaDeItems = document.getElementsByClassName("item");
    console.log(listaDeItems);


}




