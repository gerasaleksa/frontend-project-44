import readlineSync from 'readline-sync';

const roundsCount = 3;

const basisGames = (game, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [rightAnswer, question] = game();
    console.log(`${'Question: '}${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer}${' is wrong answer ;(. Correct answer was '}${rightAnswer}${"\nLet's try again"},${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default basisGames;
