function agregarTarea() {
    // Obtener el valor de la tarea desde el input
    const tarea = document.getElementById('tareaInput').value;

    // Validar que la tarea no esté vacía
    if (tarea.trim() !== '') {
      // Crear un nuevo elemento li para la tarea
      const nuevaTarea = document.createElement('li');
      nuevaTarea.className = 'list-group-item d-flex justify-content-between align-items-center';
      nuevaTarea.innerHTML = `
        ${tarea}
        <button class="btn btn-danger btn-sm" onclick="eliminarTarea(this)">Eliminar</button>
      `;

      // Agregar la tarea a la lista
      document.getElementById('listaTareas').appendChild(nuevaTarea);

      // Limpiar el input después de agregar la tarea
      document.getElementById('tareaInput').value = '';
    } else {
      alert('Por favor, ingrese una tarea válida.');
    }
  }

  function eliminarTarea(elemento) {
    const tareaAEliminar = elemento.parentElement;

    // Eliminar la tarea de la lista
    document.getElementById('listaTareas').removeChild(tareaAEliminar);
  }
