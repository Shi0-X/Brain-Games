import runGame from './index.js';

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const getExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = getRandomInt(20); // Números entre 1 y 20
  const num2 = getRandomInt(20); // Números entre 1 y 20

  return {
    question: `${num1} ${operator} ${num2}`,
    answer: String(eval(`${num1} ${operator} ${num2}`)),
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
