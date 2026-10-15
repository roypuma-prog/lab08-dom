# Tarea: Mi componente interactivo

## Componente elegido

Gestor de Tareas Interactivo con selección de prioridad, marcas de estado y eliminación de elementos.

## Version 1: solo DOM

Se creó la maqueta estructural básica en HTML con el formulario y la lista en estado inicial estático.

```js
const lista = document.querySelector("#listaTareas");
const li = document.createElement("li");
li.textContent = "Tarea inicial de prueba";
lista.appendChild(li);
```

## Version 2: Con Eventos

```js
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (txtTitulo.value.trim() === "") {
    msgError.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }
  // Creación del elemento e interacción de borrado con remove()
});
```

## Version 3: Con Clases y Objetos

```js
class Tarea {
  constructor(titulo, prioridad) {
    this.titulo = titulo;
    this.prioridad = prioridad;
    this.completada = false;
  }
  conmutarEstado() {
    this.completada = !this.completada;
  }
  obtenerEtiqueta() {
    return `${this.titulo} [Prioridad: ${this.prioridad}]`;
  }
}
```

| Pieza   | Linea de tu codigo donde aparece                                     | Para que sirve                                                                               |
| ------- | -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| DOM     | `listaTareas.appendChild(li);` y `li.remove();`                      | Inserta dinámicamente nuevas tareas y las elimina del árbol HTML.                            |
| Eventos | `addEventListener("submit", ...)` y `addEventListener("input", ...)` | Escucha los envíos del formulario, clics en los elementos y entrada de texto en tiempo real. |
| Objetos | `const nuevaTarea = new Tarea(...)`                                  | Instancia objetos a partir de la clase Tarea gestionando sus datos y estados.                |

| Accion                                              | Resultado esperado                                 | Resultado obtenido                                    | Cumple (Si/No) |
| --------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- | -------------- |
| Enviar formulario con campo de titulo vacio         | Muestra mensaje de error en rojo                   | Aparece "El título de la tarea no puede estar vacío." | Si             |
| Escribir en el input teniendo error visible         | El mensaje de error desaparece inmediatamente      | Se limpia el texto de error con el evento input       | Si             |
| Agregar la tarea "Estudiar JS" con prioridad "Alta" | Aparece en la lista con su etiqueta de prioridad   | Muestra "Estudiar JS [Prioridad: Alta]"               | Si             |
| Hacer clic sobre el texto de la tarea agregada      | Se tacha el texto indicando que fue completada     | Cambia la clase CSS y se aplica line-through          | Si             |
| Hacer clic en el boton "Eliminar"                   | El elemento desaparece por completo de la pantalla | Se ejecuta li.remove() y se elimina el nodo DOM       | Si             |

# lab08-dom

Bitacora de JavaScript interactivo: DOM, eventos y objetos

- [Bitacora de JavaScript interactivo](notas/BITACORA.md)
- [Ver la pagina en vivo](https://roypuma-prog.github.io/lab08-dom/)
- [Tarea: mi componente interactivo](notas/TAREA.md)
- [Ver la tarea en vivo](https://roypuma-prog.github.io/lab08-dom/tarea/)
