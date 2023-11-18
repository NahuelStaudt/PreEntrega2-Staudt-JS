const carrito = [];

const prendas = [
    { imagen: '👚', codigo: 1, nombre: 'Remera', precio: 6700 },
    { imagen: '🩳', codigo: 2, nombre: 'Short', precio: 4000 },
    { imagen: '👖', codigo: 3, nombre: 'Jean', precio: 9999 },
    { imagen: '👔', codigo: 4, nombre: 'Camisa', precio: 8900 },
    { imagen: '🎩', codigo: 5, nombre: 'Sombrero', precio: 2500 },
];

class Compra {
    constructor(carrito) {
        this.carrito = carrito;
    }

    obtenerSubtotal() {
        return this.carrito.reduce((total, prenda) => total + prenda.precio, 0);
    }
}

function buscarPrenda(codigo) {
    return prendas.find((prenda) => prenda.codigo === codigo);
}

function comprar() {
    let codigo = prompt("Ingresa el código de la prenda de vestir:");

    if (!codigo) {
        console.log("Operación cancelada. No se ingresó ningún código.");
        return;
    }

    let codigoInt = parseInt(codigo);
    let prendaElegida = buscarPrenda(codigoInt);

    if (prendaElegida) {
        carrito.push(prendaElegida);
        alert(`${prendaElegida.nombre} se agregó al carrito.`);
        let respuesta = confirm("¿Deseas elegir otra prenda?");
        if (respuesta) {
            comprar();
        } else {
            console.clear();
            const shop = new Compra(carrito);
            let subtotal = shop.obtenerSubtotal();
            console.table(carrito);
            console.log(`🛍️ El costo de tu compra es: $${subtotal}\nMuchas gracias por elegirnos.`);
        }
    } else {
        alert("Error en el código de prenda ingresado.\nRefresca para comenzar de nuevo.");
    }
}

function eliminarProdDelCarrito() {
    console.clear();
    console.table(carrito);

    let cod = prompt("Ingresa el cód de producto a quitar:");

    if (!cod) {
        console.log("Operación cancelada. No se ingresó ningún código.");
        return;
    }

    let indice = carrito.findIndex((prenda) => prenda.codigo === parseInt(cod));

    if (indice !== -1) {
        carrito.splice(indice, 1);
        console.table(carrito);
    } else {
        console.log("Código de producto no encontrado en el carrito.");
    }
}

