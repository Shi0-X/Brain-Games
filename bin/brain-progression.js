#!/usr/bin/env node

import runGame from '../src/index.js';
import readlineSync from 'readline-sync';

function jugar() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('¿Qué número falta en la progresión?');

  let aciertos = 0;
  let fallas = 0;

  while (aciertos < 3 && fallas < 3) {
    const longitud = Math.floor(Math.random() * 5) + 5;
    const diferencia = Math.floor(Math.random() * 10) + 1;
    const inicio = Math.floor(Math.random() * 10) + 1;
    const oculto = Math.floor(Math.random() * longitud);

    const progresion = [];
    for (let i = 0; i < longitud; i++) {
      if (i === oculto) {
        progresion.push('..');
      } else {
        progresion.push(inicio + i * diferencia);
      }
    }

    const respuesta = readlineSync.question(`Pregunta: ${progresion.join(' ')}\nTu respuesta: `);

    if (respuesta == inicio + oculto * diferencia) {
      console.log('¡Correcto!');
      aciertos++;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${inicio + oculto * diferencia}'.`);
      fallas++;
    }
  }

  if (aciertos === 3) {
    console.log(`¡Felicidades ${nombre}, Terminaste el juego!`);
  } else {
    console.log(`¡Lo siento, ${nombre}! ¡Recuerda que siempre puede intentarlo de nuevo, no te rindas!`);
  }
}

jugar();