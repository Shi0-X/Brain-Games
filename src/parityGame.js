import readlineSync from 'readline-sync';

// Función para generar un número aleatorio
const getRandomNumber = () => Math.floor(Math.random() * 100);

// Función para determinar si un número es par
const isEven = (number) => number % 2 === 0;

// Función principal para jugar el juego
const playParityGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomNumber();
    console.log(`Pregunta: ${number}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      correctAnswers = 0; // Reinicia el conteo de respuestas correctas
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default playParityGame;
