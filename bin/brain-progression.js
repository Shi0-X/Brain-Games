#!/usr/bin/env node

import readlineSync from 'readline-sync';

function generarProgresion(longitud, diferencia, inicio, oculto) {
  return Array.from({ length: longitud }, (_, i) =>
    i === oculto ? '..' : inicio + i * diferencia
  );
}

function obtenerDatosJuego() {
  const longitud = Math.floor(Math.random() * 5) + 5;
  const diferencia = Math.floor(Math.random() * 10) + 1;
  const inicio = Math.floor(Math.random() * 10) + 1;
  const oculto = Math.floor(Math.random() * longitud);
  return { longitud, diferencia, inicio, oculto };
}

function validarRespuesta(respuesta, respuestaCorrecta) {
  return Number(respuesta) === respuestaCorrecta; // Convertir respuesta a número antes de comparar
}

function mostrarPregunta(progresion) {
  console.log(`Pregunta: ${progresion.join(' ')}`);
  return readlineSync.question('Tu respuesta: ');
}

function mostrarResultado(aciertos, nombre) {
  const mensajeFinal = aciertos === 3 
    ? `¡Felicidades, ${nombre}!`
    : `¡Lo siento, ${nombre}! ¡Recuerda que siempre puedes intentarlo de nuevo, no te rindas!`;
  console.log(mensajeFinal);
}

function jugar() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('¿Qué número falta en la progresión?');

  let aciertos = 0;
  let fallas = 0;

  while (aciertos < 3 && fallas < 3) {
    const { longitud, diferencia, inicio, oculto } = obtenerDatosJuego();
    const progresion = generarProgresion(longitud, diferencia, inicio, oculto);
    const respuestaCorrecta = inicio + oculto * diferencia;

    const respuesta = mostrarPregunta(progresion);

    if (validarRespuesta(respuesta, respuestaCorrecta)) {
      console.log('¡Correcto!');
      aciertos++;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      fallas++;
    }
  }

  mostrarResultado(aciertos, nombre);
}

jugar();
