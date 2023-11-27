let numeroMagico;

  function comenzarJuego() {
    // crea un número aleatorio entre 1 y 100
    numeroMagico = Math.floor(Math.random() * 100) + 1;

    // Mostrar el área de juego
    document.getElementById('juego').style.display = 'block';

    // Ocultar el botón de comenzar el juego
    document.querySelector('button').style.display = 'none';
  }

  function verificarNumero() {
    // Obtener el número ingresado por el usuario
    const numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);

    if (isNaN(numeroUsuario)) {
      alert('Por favor, ingresa un número válido.');
    } else {
      // Verificar si el número ingresado es igual al número mágico
      if (numeroUsuario === numeroMagico) {
        alert('¡Felicidades! Adivinaste el número mágico.');
        reiniciarJuego();
      } else {
        // Mostrar si el número es mayor o menor
        const mensaje = numeroUsuario < numeroMagico ? 'El número es mayor.' : 'El número es menor.';
        alert(mensaje);
      }
    }
  }

  function reiniciarJuego() {
    // Reiniciar el juego y crea un nuevo número mágico
    comenzarJuego();

    // vaciar input
    document.getElementById('numeroUsuario').value = '';
  }


