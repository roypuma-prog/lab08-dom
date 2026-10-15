// Ejercicio 2: seleccionar y modificar el DOM
const titulo = document.querySelector("#titulo");
titulo.textContent = "Hola TECSUP"; // Cambia el H1 principal
titulo.style.color = "blue"; // Cambia el color del H1 a azul

const mensaje = document.querySelector(".mensaje");
mensaje.classList.add("destacado"); // Le pone fondo amarillo al párrafo

const lista = document.querySelector("#lista");
const nuevo = document.createElement("li");
nuevo.textContent = "JavaScript"; // Agrega el tercer punto
lista.appendChild(nuevo);
// Ejercicio 3: evento click
const btnSumar = document.querySelector("#btnSumar");
const btnReiniciar = document.querySelector("#btnReiniciar");
const contador = document.querySelector("#contador");
let clics = 0;

btnSumar.addEventListener("click", (evento) => {
  clics = clics + 1;
  contador.textContent = clics;
  console.log(evento.type, evento.target);
});

btnReiniciar.addEventListener("click", () => {
  clics = 0;
  contador.textContent = clics;
});
// Ejercicio 4: eventos input y submit
const nombre = document.querySelector("#nombre");
const saludo = document.querySelector("#saludo");

// Evento input: reacciona mientras el usuario escribe
nombre.addEventListener("input", () => {
  saludo.textContent = "Hola, " + nombre.value;
});

const formulario = document.querySelector("#formulario");
const correo = document.querySelector("#correo");
const resultado = document.querySelector("#resultado");

// Evento submit: valida el formulario y evita la recarga
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault(); // Evita la recarga por defecto del navegador

  if (!correo.value.includes("@")) {
    resultado.textContent = "Correo no valido: falta @";
    resultado.classList.add("error");
  } else {
    resultado.textContent = "Enviado: " + correo.value;
    resultado.classList.remove("error");
  }
});
// Ejercicio 5: clases y objetos
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  conDescuento(pct) {
    return this.precio * (1 - pct);
  }
  descripcion() {
    return this.nombre + " - S/ " + this.precio.toFixed(2);
  }
}

// Crear los objetos (instancias)
const laptop = new Producto("Laptop", 2500);
const mouse = new Producto("Mouse", 45);
const teclado = new Producto("Teclado", 120);
const monitor = new Producto("Monitor", 680);

// Mostrar los objetos en la lista del DOM
const productos = [laptop, mouse, teclado, monitor];
const listaProductos = document.querySelector("#productos");

productos.forEach((p) => {
  const li = document.createElement("li");
  li.textContent = p.descripcion();
  listaProductos.appendChild(li);
});
// Ejercicio 6: DOM, eventos y objetos juntos
class Carrito {
  constructor() {
    this.items = [];
  }
  agregar(producto) {
    this.items.push(producto);
  }
  total() {
    let suma = 0;
    this.items.forEach((p) => {
      suma = suma + p.precio;
    });
    return suma;
  }
}

const carrito = new Carrito();

const formProducto = document.querySelector("#formProducto");
const prodNombre = document.querySelector("#prodNombre");
const prodPrecio = document.querySelector("#prodPrecio");
const listaCarrito = document.querySelector("#carrito");
const total = document.querySelector("#total");

formProducto.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Se usa Number() para convertir el texto ingresado a valor numérico
  const producto = new Producto(prodNombre.value, Number(prodPrecio.value));
  carrito.agregar(producto);

  const li = document.createElement("li");
  li.textContent = producto.descripcion();
  listaCarrito.appendChild(li);

  total.textContent = carrito.total().toFixed(2);
  formProducto.reset();
});
