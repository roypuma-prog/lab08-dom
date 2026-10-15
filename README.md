# lab08-dom

Bitacora de JavaScript interactivo: DOM, eventos y objetos

# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instrucción                  | Qué cambió en la pantalla                                         | Se mantiene al recargar (Sí/No) |
| ---------------------------- | ----------------------------------------------------------------- | ------------------------------- |
| textContent desde la consola | El título cambió temporalmente a "Hola desde la consola".         | No                              |
| textContent desde app.js     | El título de la página cambió permanentemente a "Hola TECSUP".    | Sí                              |
| style.color                  | El texto del título cambió a color azul.                          | Sí                              |
| classList.add                | El párrafo tomó el fondo de color amarillo (clase `.destacado`).  | Sí                              |
| createElement + appendChild  | Se agregó un tercer elemento ("JavaScript") al final de la lista. | Sí                              |

## Ejercicio 3: Evento click

| Tipo de evento | Qué acción lo dispara                     | Cuánto suma por acción                      |
| :------------- | :---------------------------------------- | :------------------------------------------ |
| `click`        | Hacer un clic sencillo sobre el botón     | Suma 1 por cada clic                        |
| `dblclick`     | Hacer un doble clic rápido sobre el botón | Suma 1 por cada doble clic                  |
| `mouseover`    | Mover el cursor encima del botón          | Suma 1 cada vez que el ratón entra al botón |

**Información devuelta por el objeto evento:**

- `evento.type`: Muestra el nombre del tipo de evento ejecutado (por ejemplo, `click`).
- `evento.target`: Muestra el elemento HTML exacto que recibió el evento (en este caso, `<button id="btnSumar">Sumar 1</button>`).

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                                                             | Se recargo la pagina (Si/No) |
| --------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El saludo cambia letra por letra en tiempo real mostrando "Hola, " seguido del texto escrito.       | No                           |
| Enviar sin preventDefault               | El mensaje de enviado aparece solo un instante y desaparece porque el formulario limpia los campos. | Si                           |
| Enviar con preventDefault, correo sin @ | Muestra el mensaje de error en texto de color rojo: "Correo no valido: falta @".                    | No                           |
| Enviar con preventDefault, correo con @ | Muestra el mensaje de confirmacion: "Enviado: roy.puma@tecsup.edu.pe".                              | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875.00            |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90.00              |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510.00             |

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina              | Correcto (Si/No) |
| --------------- | ---------------------------------------- | ---------------- |
| Cuaderno 12.50  | 12.50                                    | Si               |
| + Lapicero 3.20 | 15.70                                    | Si               |
| + Mochila 89.90 | 105.60                                   | Si               |
| Sin Number()    | No se calcula y muestra error en consola | No               |

| Pieza  | Linea de tu codigo donde aparece               | Para que sirve                                                                           |
| ------ | ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| DOM    | `listaCarrito.appendChild(li);`                | Crea e inserta el nuevo nodo `<li>` en la lista HTML para mostrar el producto agregado.  |
| Evento | `formProducto.addEventListener("submit", ...)` | Captura el envío del formulario sin recargar la página gracias a `preventDefault()`.     |
| Objeto | `const producto = new Producto(...)`           | Crea una instancia con los datos ingresados para calcular montos y gestionar el carrito. |

# lab08-dom

Bitacora de JavaScript interactivo: DOM, eventos y objetos

- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Ver la pagina en vivo](https://roypuma-prog.github.io/lab08-dom/)
- [Tarea: mi componente interactivo](notas/TAREA.md)
- [Ver la tarea en vivo](https://roypuma-prog.github.io/lab08-dom/tarea/)
