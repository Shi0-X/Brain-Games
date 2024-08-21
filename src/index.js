import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (description, gameLogic) => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = gameLogic();
    const userAnswer = readlineSync.question(`Pregunta: ${question}\nTu respuesta: `);

    if (userAnswer === answer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${answer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;

