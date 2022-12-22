import readlineSync from 'readline-sync';

const game = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numsave = (Math.round(Math.random() * 100));
    const quest = readlineSync.question(`Question: ${numsave}\nYour answer: `);
    if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !== 0 && quest === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default game;
