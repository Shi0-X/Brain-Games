import readlineSync from 'readline-sync';

// Variables globales
let aciertos = 0;
let fallas = 0;

// Función para calcular el Máximo Común Divisor (MCD)
const calcularMCD = (a, b) => (b === 0 ? a : calcularMCD(b, a % b));

// Función para generar preguntas
const generarPreguntas = (cantidad) => {
  const preguntas = [];
  for (let i = 0; i < cantidad; i += 1) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    preguntas.push({ num1, num2, mcd: calcularMCD(num1, num2) });
  }
  return preguntas;
};

// Función para solicitar respuesta al usuario
const solicitarRespuesta = (pregunta) => readlineSync.question(`Pregunta: ${pregunta.num1} ${pregunta.num2}\n`);

// Función para procesar la respuesta del usuario
const procesarRespuesta = (respuesta, pregunta) => {
  if (Number(respuesta) === pregunta.mcd) {
    console.log('¡Correcto!');
    aciertos += 1;
  } else {
    console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${pregunta.mcd}'.`);
    fallas += 1;
  }
};

// Función principal para jugar el juego
const jugar = () => {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  const preguntas = generarPreguntas(3); // Número de preguntas a 3
  preguntas.forEach((pregunta) => {
    const respuesta = solicitarRespuesta(pregunta);
    procesarRespuesta(respuesta, pregunta);
    if (aciertos === 3 || fallas === 1) return;
  });

  if (aciertos === 3) {
    console.log(`¡Felicidades, ${nombre}! Terminaste el juego!`);
  } else {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
  }

  process.exit(0); // Cierra el programa después de mostrar todas las preguntas y procesar las respuestas
};

export default jugar;