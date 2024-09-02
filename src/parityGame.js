import readlineSync from 'readline-sync';

// Función para generar un número aleatorio
const getRandomNumber = () => Math.floor(Math.random() * 100);

// Función para determinar si un número es par
const isEven = (number) => number % 2 === 0;

// Función para obtener la respuesta del usuario
const getUserAnswer = () => readlineSync.question('Tu respuesta: ').toLowerCase();

// Función para verificar la respuesta del usuario
const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('¡Correcto!');
    return true;
  }
  console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
  return false;
};

// Función principal para jugar el juego
const playParityGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let correctAnswers = 0;
  const maxCorrectAnswers = 3;
  const maxIncorrectAnswers = 1; // Modificado para finalizar después de 1 error

  while (correctAnswers < maxCorrectAnswers) { // Cambiado para finalizar al alcanzar 3 respuestas correctas
    const number = getRandomNumber();
    console.log(`Pregunta: ${number}`);
    const userAnswer = getUserAnswer();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (checkAnswer(userAnswer, correctAnswer)) {
      correctAnswers += 1;
    } else {
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return; // Añadido para finalizar el juego inmediatamente después de un error
    }
  }

  console.log(`¡Felicidades, ${name}, Terminaste el juego con 3 respuestas correctas!`);
};

export default playParityGame;
