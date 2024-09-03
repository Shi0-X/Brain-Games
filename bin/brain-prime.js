#!/usr/bin/env node

import runGame from '../src/index.js';

// Función para verificar si un número es primo
function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

// Función para generar un número aleatorio
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

// Función que genera una pregunta y respuesta correcta para el juego
const gameLogic = () => {
  const num = generarNumeroAleatorio();
  const respuestaCorrecta = esPrimo(num) ? 'yes' : 'no';
  
  return {
    question: `${num}`,
    answer: respuestaCorrecta,
  };
};

const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

// Ejecutar el juego utilizando la función runGame
runGame(description, gameLogic);
