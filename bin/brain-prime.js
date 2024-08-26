#!/usr/bin/env node

import runGame from '../src/index.js';
import readlineSync from 'readline-sync';

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function obtenerRespuestaUsuario(num) {
  return readlineSync.question(`Pregunta: ${num}\nTu respuesta: `).toLowerCase();
}

function validarRespuesta(respuesta, num) {
  return (respuesta === 'yes' && esPrimo(num)) || (respuesta === 'no' && !esPrimo(num));
}

function mostrarResultadoFinal(nombre, aciertos) {
  if (aciertos === 3) {
    console.log(`¡Felicidades, ${nombre}, Terminaste el juego!`);
  } else {
    console.log(`¡Lo siento, ${nombre}! ¡Recuerda que siempre puedes intentarlo de nuevo, no te rindas!`);
  }
}

function jugar() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  let aciertos = 0;
  let fallas = 0;

  while (aciertos < 3 && fallas < 3) {
    const num = Math.floor(Math.random() * 100) + 1;
    const respuesta = obtenerRespuestaUsuario(num);

    if (validarRespuesta(respuesta, num)) {
      console.log('¡Correcto!');
      aciertos++;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${esPrimo(num) ? 'yes' : 'no'}'.`);
      fallas++;
    }
  }

  mostrarResultadoFinal(nombre, aciertos);
}

jugar();
