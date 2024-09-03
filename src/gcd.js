// gcd.js

import runGame from './index.js'; // Importar runGame desde index.js

// Función para calcular el máximo común divisor (MCD)
const calcularMCD = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
};

// Generar una pregunta con números aleatorios y su MCD
const generarPregunta = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const question = `${num1} ${num2}`;
  const answer = String(calcularMCD(num1, num2)); // Convertimos la respuesta a cadena

  return { question, answer };
};

// Lógica específica del juego para encontrar el MCD
const gameLogic = () => {
  const { question, answer } = generarPregunta();
  return {
    question,
    answer,
  };
};

// Descripción del juego
const description = 'Encuentra el máximo común divisor de los números dados.';

// Exportar la función del juego usando runGame
export default () => runGame(description, gameLogic);
