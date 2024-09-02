import runGame from './index.js';
import readlineSync from 'readline-sync';

let aciertos = 0;
let fallas = 0;

function calcularMCD(a, b) {
  return b === 0 ? a : calcularMCD(b, a % b);
}

function generarPreguntas(cantidad) {
  const preguntas = [];
  for (let i = 0; i < cantidad; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    preguntas.push({ num1, num2, mcd: calcularMCD(num1, num2) });
  }
  return preguntas;
}

function solicitarRespuesta(pregunta) {
  return readlineSync.question(`Pregunta: ${pregunta.num1} ${pregunta.num2}\nTu respuesta: `);
}

function procesarRespuesta(respuesta, pregunta) {
  if (respuesta == pregunta.mcd) {
    console.log('¡Correcto!');
    aciertos++;
  } else {
    console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${pregunta.mcd}'.`);
    fallas++;
  }
}

function jugar() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  const preguntas = generarPreguntas(3); // Cambié el número de preguntas a 3
  for (const pregunta of preguntas) {
    const respuesta = solicitarRespuesta(pregunta);
    procesarRespuesta(respuesta, pregunta);
    if (aciertos === 3 || fallas === 1) break;
  }

  console.log(aciertos === 3 
    ? `¡Felicidades, ${nombre}! Terminaste el juego!`  // Ajustado para incluir el nombre del jugador
    : `¡Lo siento, ${nombre}! Recuerda que puedes volver a intentarlo, no te rindas!`
  );

  process.exit(0);
}

export default jugar;
