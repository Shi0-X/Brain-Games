import runGame from './index.js';
import readlineSync from 'readline-sync';

let aciertos = 0;
let fallas = 0;

function calcularMCD(a, b) {
  if (b == 0) {
    return a;
  } else {
    return calcularMCD(b, a % b);
  }
}

function jugar() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  const preguntas = [];
  for (let i = 0; i < 6; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    preguntas.push({ num1, num2, mcd: calcularMCD(num1, num2) });
  }

  let terminar = false;
  for (const pregunta of preguntas) {
    if (terminar) break;
    const respuesta = readlineSync.question(`Pregunta: ${pregunta.num1} ${pregunta.num2}\nTu respuesta: `);

    if (respuesta == pregunta.mcd) {
      console.log('¡Correcto!');
      aciertos++;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${pregunta.mcd}'.`);
      fallas++;
    }

    if (aciertos === 3 || fallas === 3) {
      terminar = true;
    }
  }

  if (aciertos === 3) {
    console.log('¡Felicidades, Terminaste el juego!');
  } else {
    console.log('¡Lo siento, Recuerda que puedes volver a intentarlo, no te rindas!');
  }

  process.exit(0);
}

export default jugar;