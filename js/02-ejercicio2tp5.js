class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, añoNacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.DNI = DNI;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.añoNacimiento = añoNacimiento;
    }

    mostrarGeneracion() {
      const generaciones = [
        { nombre: "Generación Z", marcoTemporal: [1994, 2010], poblacion: 7800000, circunstanciaHistorica: "Expansión masiva de internet", rasgoCaracteristico: "Irreverencia" },
        { nombre: "Generación Millennials Y", marcoTemporal: [1981, 1993], poblacion: 7200000, circunstanciaHistorica: "Inicio de la digitalización", rasgoCaracteristico: "Frustración" },
        { nombre: "Generación X", marcoTemporal: [1969, 1980], poblacion: 9300000, circunstanciaHistorica: "Crisis del 73' y Transición española", rasgoCaracteristico: "Obsesión por el éxito" },
        { nombre: "Baby Boom", marcoTemporal: [1949, 1968], poblacion: 12200000, circunstanciaHistorica: "Paz y explosión demográfica", rasgoCaracteristico: "Ambición" },
        { nombre: "Silent Generation", marcoTemporal: [1930, 1948], poblacion: 6300000, circunstanciaHistorica: "Conflictos bélicos", rasgoCaracteristico: "Austeridad" }
      ];

      const generacionActual = generaciones.find(generacion => this.añoNacimiento >= generacion.marcoTemporal[0] && this.añoNacimiento <= generacion.marcoTemporal[1]);

      if (generacionActual) {
        alert(`Pertenece a la ${generacionActual.nombre}. Rasgo característico: ${generacionActual.rasgoCaracteristico}`);
      } else {
        alert("No se pudo determinar la generación.");
      }
    }

    esMayorDeEdad() {
      return this.edad >= 18;
    }

    mostrarDatos() {
      return `Nombre: ${this.nombre}\nEdad: ${this.edad}\nDNI: ${this.DNI}\nSexo: ${this.sexo}\nPeso: ${this.peso}\nAltura: ${this.altura}\nAño de nacimiento: ${this.añoNacimiento}`;
    }
  }

  function crearPersona() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const DNI = document.getElementById('DNI').value;
    const sexo = document.getElementById('sexo').value.toUpperCase();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const añoNacimiento = parseInt(document.getElementById('añoNacimiento').value);

    window.persona = new Persona(nombre, edad, DNI, sexo, peso, altura, añoNacimiento);
    document.getElementById('result').innerText = 'Persona creada:\n' + window.persona.mostrarDatos();
  }

  function mostrarGeneracion() {
    if (window.persona) {
      window.persona.mostrarGeneracion();
    } else {
      alert('Primero crea una persona.');
    }
  }

  function esMayorDeEdad() {
    if (window.persona) {
      const mensaje = window.persona.esMayorDeEdad() ? 'Es mayor de edad.' : 'No es mayor de edad.';
      alert(mensaje);
    } else {
      alert('Primero crea una persona.');
    }
  }