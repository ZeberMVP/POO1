// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    set setNombre (nombre) {this.nombre = nombre};
    get getNombre () {return this.nombre};
    set setEdad (edad) {this.edad = edad};
    get getEdad () {return this.edad};
    set setGenero (genero) {this.genero = genero};
    get getGenero () {return this.genero};
    get obtDetalles() {
        console.log(`Esta persona es ${this.nombre}, ${this.genero} de ${this.edad} años`);
    }
}

// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona {
    constructor (nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
    }

    get registrar() {
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Género: ${this.genero}
        Curso: ${this.curso}
        Grupo: ${this.grupo}
        `)
    }
}

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.
class Profesor extends Persona {
    constructor (nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
    }

    get asignar() {
        console.log(`
        Nombre: ${this.nombre}
        Edad: ${this.edad}
        Género: ${this.genero}
        Asignatura: ${this.asignatura}
        Nivel: ${this.nivel}
        `)
    }
}

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.
let ruben = new Persona("Rubén", "20", "mujer");
ruben.getNombre;
ruben.setGenero = "hombre";
ruben.obtDetalles;

let ruben = new Estudiante ("Rubén", "20", "Hombre", "Full Stack Web Development", "fs-ft-nov22");
ruben.registrar;

let manolo = new Profesor ("Manolo", "57", "Hombre", "Matemáticas", "Muy difíciles");
manolo.asignar;

