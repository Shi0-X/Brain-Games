import runGame from './index.js';

// Función para obtener un número entero aleatorio en el rango [1, max]
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

// Función para evaluar una expresión matemática de forma segura
const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operador no soportado: ${operator}`);
  }
};

const getExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = getRandomInt(20); // Números entre 1 y 20
  const num2 = getRandomInt(20); // Números entre 1 y 20

  return {
    question: `${num1} ${operator} ${num2}`,
    answer: String(calculate(num1, operator, num2)), // Usar la función calculate en lugar de eval
  };
};

const gameLogic = () => {
  const { question, answer } = getExpression();
  return {
    question,
    answer,
  };
};

const description = '¿Cuál es el resultado de la expresión?';

export default () => runGame(description, gameLogic);
