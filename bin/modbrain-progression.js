#!/usr/bin/env node

import runGame from '../src/index.js';
import readlineSync from 'readline-sync';

function generarProgresion(longitud, diferencia, inicio, oculto) {
  const progresion = [];
  for (let i = 0; i < longitud; i++) {
    progresion.push(i === oculto ? '..' : inicio + i * diferencia);
  }
  return progresion;
}

function jugar() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('¿Qué número falta en la progresión?');

  let aciertos = 0;
  let fallas = 0;

  while (aciertos < 3 && fallas < 3) {
    const longitud = Math.floor(Math.random() * 5) + 5;
    const diferencia = Math.floor(Math.random() * 10) + 1;
    const inicio = Math.floor(Math.random() * 10) + 1;
    const oculto = Math.floor(Math.random() * longitud);

    const progresion = generarProgresion(longitud, diferencia, inicio, oculto);
    const respuestaCorrecta = inicio + oculto * diferencia;

    console.log(`Pregunta: ${progresion.join(' ')}`);
    const respuesta = readlineSync.question('Tu respuesta: ');

    if (respuesta == respuestaCorrecta) {
      console.log('¡Correcto!');
      aciertos++;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      fallas++;
    }
  }

  const mensajeFinal = aciertos === 3 
    ? `¡Felicidades ${nombre}, Terminaste el juego!` 
    : `¡Lo siento, ${nombre}! ¡Recuerda que siempre puedes intentarlo de nuevo, no te rindas!`;

  console.log(mensajeFinal);
}

jugar();
