#!/usr/bin/env node

const readline = require('readline');

// Interfaz de lectura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para calcular el MCD usando el algoritmo de Euclides
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

// Función para generar una pregunta
const getQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  return { num1, num2 };
};

// Función principal del juego
const startGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  console.log('Encuentra el máximo común divisor de los números dados.');

  const { num1, num2 } = getQuestion();
  const correctAnswer = gcd(num1, num2);

<<<<<<< HEAD
  rl.question(`Pregunta: ${num1} ${num2}\nTu respuesta: `, (answer) => {
    if (parseInt(answer, 10) === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
    }
    rl.close();
  });
};
=======
  console.log(aciertos === 3 
    ? '¡Felicidades, Terminaste el juego!' 
    : '¡Lo siento, Recuerda que puedes volver a intentarlo, no te rindas!'
  );
>>>>>>> parent of 179d154 (update gcd)

// Inicia el juego
startGame();
