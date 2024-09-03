// paritygame.js

import runGame from './index.js'; // Importar runGame desde index.js

// Función para generar un número aleatorio
const getRandomNumber = () => Math.floor(Math.random() * 100);

// Función para determinar si un número es par
const isEven = (number) => number % 2 === 0;

// Lógica específica del juego para verificar la paridad de un número
const gameLogic = () => {
  const number = getRandomNumber();
  const question = `${number}`;
  const answer = isEven(number) ? 'yes' : 'no'; // Responde "yes" si es par, "no" si no lo es

  return { question, answer };
};

// Descripción del juego
const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

// Exportar la función del juego usando runGame
export default () => runGame(description, gameLogic);
