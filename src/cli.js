// src/cli.js
import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cual es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
};

export default greetUser;
