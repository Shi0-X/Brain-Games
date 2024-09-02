import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? '); // Corregido para usar acento en la '¿Cuál'
  console.log(`¡Hola, ${name}!`);
};

export default greetUser;

