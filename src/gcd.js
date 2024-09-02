import readlineSync from 'readline-sync';
// import runGame from './index.js'; // Eliminado porque no se utiliza

let aciertos = 0;
let fallas = 0;

const calcularMCD = (a, b) => (b === 0 ? a : calcularMCD(b, a % b));

const generarPreguntas = (cantidad) => {
  const preguntas = [];
  for (let i = 0; i < cantidad; i += 1) { // Reemplazado ++ por += 1
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    preguntas.push({ num1, num2, mcd: calcularMCD(num1, num2) });
  }
  return preguntas;
};

const solicitarRespuesta = (pregunta) => readlineSync.question(`Pregunta: ${pregunta.num1} ${pregunta.num2}\nTu respuesta: `);

const procesarRespuesta = (respuesta, pregunta) => {
  if (Number(respuesta) === pregunta.mcd) { // Reemplazado == por === y convertido respuesta a número
    console.log('¡Correcto!');
    aciertos += 1; // Reemplazado ++ por += 1
  } else {
    console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${pregunta.mcd}'.`);
    fallas += 1; // Reemplazado ++ por += 1
  }
};

const jugar = () => {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  const preguntas = generarPreguntas(3); // Número de preguntas a 3
  for (const pregunta of preguntas) {
    const respuesta = solicitarRespuesta(pregunta);
    procesarRespuesta(respuesta, pregunta);
    if (aciertos === 3 || fallas === 1) break;
  }

  if (aciertos === 3) {
    console.log(`¡Felicidades, ${nombre}! Terminaste el juego!`);
  } else {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
  }

  process.exit(0);
};

export default jugar;
