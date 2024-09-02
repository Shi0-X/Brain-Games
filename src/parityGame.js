import readlineSync from 'readline-sync';

// Función para generar un número aleatorio
const getRandomNumber = () => Math.floor(Math.random() * 100);

// Función para determinar si un número es par
const isEven = (number) => number % 2 === 0;

// Función para obtener la respuesta del usuario
const getUserAnswer = () => {
  let answer;
  do {
    answer = readlineSync.question('Tu respuesta: ').toLowerCase();
  } while (answer !== 'yes' && answer !== 'no');
  return answer;
};

// Función para verificar la respuesta del usuario
const checkAnswer = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('¡Correcto!');
    return true;
  } else {
    console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
    return false;
  }
};

// Función principal para jugar el juego
const playParityGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let correctAnswers = 0;
  const maxCorrectAnswers = 3;
  const maxIncorrectAnswers = 1;

  while (correctAnswers < maxCorrectAnswers) {
    const number = getRandomNumber();
    console.log(`Pregunta: ${number}`);
    const userAnswer = getUserAnswer();

    const correctAnswer = isEven(number) ? 'yes' : 'no';
    
    if (checkAnswer(userAnswer, correctAnswer)) {
      correctAnswers += 1;
    } else {
      console.log(`Lo siento, ${name}. Has fallado. El juego ha terminado.`);
      return; // Salir del juego si se falla
    }

    // Verificar si se debe terminar el juego por alcanzar 3 respuestas correctas
    if (correctAnswers === maxCorrectAnswers) {
      console.log(`¡Felicidades, ${name}, Terminaste el juego con 3 respuestas correctas!`);
      return; // Salir del juego si se alcanzan 3 respuestas correctas
    }
  }
};

export default playParityGame;
