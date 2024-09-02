#!/usr/bin/env node

import readlineSync from 'readline-sync';

function esPrimo(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i+= 1) {
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
    console.log(`¡Felicidades, ${nombre}!`);
  } else {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
  }
}

function mostrarIntroduccion() {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');
  return nombre;
}

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function procesarRonda() {
  const num = generarNumeroAleatorio();
  const respuesta = obtenerRespuestaUsuario(num);
  const esRespuestaCorrecta = validarRespuesta(respuesta, num);

  return {
    num,
    respuesta,
    esRespuestaCorrecta,
  };
}

function jugar() {
  const nombre = mostrarIntroduccion();

  let aciertos = 0;
  let fallas = 0;

  while (aciertos < 3 && fallas < 1) {
    const { num, respuesta, esRespuestaCorrecta } = procesarRonda();

    if (esRespuestaCorrecta) {
      console.log('¡Correcto!');
      aciertos += 1; // Reemplazo de `aciertos++` por `aciertos += 1`
    } else {
      console.log(`'${respuesta}' es incorrecto ;(. La respuesta correcta era '${esPrimo(num) ? 'yes' : 'no'}'.`);
      fallas += 1; // Reemplazo de `fallas++` por `fallas += 1`
    }
  }

  mostrarResultadoFinal(nombre, aciertos);
}

jugar();
