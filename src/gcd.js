import readlineSync from 'readline-sync';
// import runGame from './index.js'; // Eliminado porque no se utiliza

let aciertos = 0;
let fallas = 0;

const calcularMCD = (a, b) => (b === 0 ? a : calcularMCD(b, a % b));

// Reemplazado bucle for por .map() para evitar el uso de bucles directos
const generarPreguntas = (cantidad) => {
  return Array.from({ length: cantidad }, () => {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    return { num1, num2, mcd: calcularMCD(num1, num2) };
  });
};

const solicitarRespuesta = (pregunta) => {
  // Línea ajustada para no exceder el límite de caracteres
  return readlineSync.question(
    `Pregunta: ${pregunta.num1} ${pregunta.num2}\nTu respuesta: `
  );
};

const procesarRespuesta = (respuesta, pregunta) => {
  const respuestaNumerica = Number(respuesta.trim()); // Asegura que la respuesta sea numérica y no tenga espacios
  if (isNaN(respuestaNumerica)) {
    console.log('Respuesta inválida. Debe ser un número.');
    fallas += 1; // Aumenta el número de fallas si la respuesta no es válida
    return false; // Indica que la respuesta fue inválida
  }

  if (respuestaNumerica === pregunta.mcd) { // Reemplazado == por === y convertido respuesta a número
    console.log('¡Correcto!');
    aciertos += 1; // Reemplazado ++ por += 1
    return true; // Indica que la respuesta fue correcta
  } else {
    console.log(`'${respuesta}' es una respuesta incorrecta ;(. La respuesta correcta era '${pregunta.mcd}'.`);
    fallas += 1; // Reemplazado ++ por += 1
    return false; // Indica que la respuesta fue incorrecta
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
    if (respuesta.trim() === '') { // Verifica si la respuesta está vacía
      console.log('No has proporcionado una respuesta.');
      fallas += 1; // Aumenta el número de fallas si la respuesta está vacía
      continue; // Continúa al siguiente ciclo sin aumentar aciertos
    }

    if (!procesarRespuesta(respuesta, pregunta)) {
      // Si la respuesta es incorrecta o inválida, se detiene el juego
      if (fallas >= 1) break; // Sale del ciclo si hay 1 o más fallas
    }

    if (aciertos === 3) break; // Sale del ciclo si hay 3 aciertos
  }

  // Mensajes finales según los resultados
  if (aciertos === 3) {
    console.log(`¡Felicidades, ${nombre}! Terminaste el juego!`);
  } else {
    console.log(`¡Intentémoslo de nuevo, ${nombre}!`);
  }

  process.exit(0);
};

export default jugar;
