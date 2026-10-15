// Clase propia con constructor, 3 atributos y 2 métodos
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

// Selección de elementos DOM
const formTarea = document.querySelector("#formTarea");
const txtTitulo = document.querySelector("#txtTitulo");
const selPrioridad = document.querySelector("#selPrioridad");
const listaTareas = document.querySelector("#listaTareas");
const msgError = document.querySelector("#msgError");

// Evento 1: input (Limpia el mensaje de error mientras el usuario escribe)
txtTitulo.addEventListener("input", () => {
  if (txtTitulo.value.trim() !== "") {
    msgError.textContent = "";
  }
});

// Evento 2: submit (Validación y creación de tarea)
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Validación: no permite campo vacío
  if (txtTitulo.value.trim() === "") {
    msgError.textContent = "El título de la tarea no puede estar vacío.";
    return;
  }

  const nuevaTarea = new Tarea(txtTitulo.value.trim(), selPrioridad.value);

  // Creación dinámica de nodos DOM
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = nuevaTarea.obtenerEtiqueta();

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "Eliminar";

  // Evento 3: click (Marcar como completada)
  span.addEventListener("click", () => {
    nuevaTarea.conmutarEstado();
    span.classList.toggle("completada");
  });

  // Evento click para eliminar el nodo del DOM (remove)
  btnEliminar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(btnEliminar);
  listaTareas.appendChild(li);

  formTarea.reset();
});
