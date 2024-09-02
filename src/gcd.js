import readlineSync from 'readline-sync';

// Contadores de aciertos y fallas
let aciertos = 0;
let fallas = 0;

// Función para calcular el máximo común divisor (MCD)
const calcularMCD = (a, b) => b === 0 ? a : calcularMCD(b, a % b);

// Generar un array de preguntas con números aleatorios y sus MCDs
const generarPreguntas = (cantidad) =>
  Array.from({ length: cantidad }, () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return { num1, num2, mcd: calcularMCD(num1, num2) };
  });

// Solicitar una respuesta al usuario
const solicitarRespuesta = (pregunta) =>
  readlineSync.question(`Pregunta: ${pregunta.num1} ${pregunta.num2}\nTu respuesta: `);

// Procesar la respuesta del usuario
const procesarRespuesta = (respuesta, pregunta) => {
  const respuestaNumerica = Number(respuesta.trim());
  
  if (Number.isNaN(respuestaNumerica)) {
    console.log('Respuesta inválida. Debe ser un número.');
    fallas += 1;
    return false;
  }

  if (respuestaNumerica === pregunta.mcd) {
    console.log('¡Correcto!');
    aciertos += 1;
    return true;
  }

  console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${pregunta.mcd}'.`);
  fallas += 1;
  return false;
};

// Función principal del juego
const jugar = () => {
  console.log('¡Bienvenido a Brain Games!');
  const nombre = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${nombre}!`);
  console.log('Encuentra el máximo común divisor de los números dados.');

  const preguntas = generarPreguntas(3);

  for (const pregunta of preguntas) {
    const respuesta = solicitarRespuesta(pregunta);
    
    if (respuesta.trim() === '') {
      console.log('No has proporcionado una respuesta.');
      fallas += 1;
      if (fallas >= 1) break; // Termina el juego si hay una falla
      continue; // Continua con la siguiente pregunta
    }

    if (!procesarRespuesta(respuesta, pregunta)) {
      if (fallas >= 1) break; // Termina el juego si hay una falla
    }

    if (aciertos === 3) break; // Termina el juego si se tienen 3 aciertos
  }

  if (aciertos === 3) {
    console.log(`¡Felicidades, ${nombre}! Terminaste el juego!`);
  } else {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
  }

  process.exit(0);
};

export default jugar;
