#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/index.js';  // Importa la función greetUser

// Genera una progresión aritmética con un elemento oculto
function generarProgresion(longitud, diferencia, inicio, oculto) {
  return Array.from({ length: longitud }, (_, i) => (
    i === oculto ? '..' : inicio + i * diferencia
  ));
}

// Obtiene datos aleatorios para el juego
function obtenerDatosJuego() {
  const longitud = Math.floor(Math.random() * 5) + 5;
  const diferencia = Math.floor(Math.random() * 10) + 1;
  const inicio = Math.floor(Math.random() * 10) + 1;
  const oculto = Math.floor(Math.random() * longitud);
  return {
    longitud,
    diferencia,
    inicio,
    oculto,
  };
}

// Valida si la respuesta del usuario es correcta
function validarRespuesta(respuesta, respuestaCorrecta) {
  return Number(respuesta) === respuestaCorrecta;
}

// Muestra la pregunta al usuario y obtiene su respuesta
function mostrarPregunta(progresion) {
  console.log(`Pregunta: ${progresion.join(' ')}`);
  return readlineSync.question('Tu respuesta: ');
}

// Muestra el resultado final del juego
function mostrarResultado(aciertos, fallas, nombre) {
  if (fallas >= 1) {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
  } else if (aciertos === 3) {
    console.log(`¡Felicidades, ${nombre}!`);
  } else {
    console.log(`¡Lo siento, ${nombre}! ¡Recuerda que siempre puedes intentarlo de nuevo, no te rindas!`);
  }
}

// Función principal para jugar el juego
function jugar() {
  const nombre = greetUser();  // Llama a la función greetUser para el saludo
  console.log('¿Qué número falta en la progresión?');

  let aciertos = 0;
  let fallas = 0;

  while (aciertos < 3 && fallas < 1) {
    const {
      longitud,
      diferencia,
      inicio,
      oculto,
    } = obtenerDatosJuego();
    const progresion = generarProgresion(longitud, diferencia, inicio, oculto);
    const respuestaCorrecta = inicio + oculto * diferencia;

    const respuesta = mostrarPregunta(progresion);

    if (validarRespuesta(respuesta, respuestaCorrecta)) {
      console.log('¡Correcto!');
      aciertos += 1;
    } else {
      console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${respuestaCorrecta}'.`);
      fallas += 1;
    }
  }

  mostrarResultado(aciertos, fallas, nombre);
}

jugar();
