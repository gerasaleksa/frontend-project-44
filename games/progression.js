import readlineSync from 'readline-sync';

const randomNumber = (from, to) => {
  return Math.round(Math.random() * (to - from) + from);
};

const getProgression = (size, start = 0, step = 1) => {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push(start + (step * i));
  }
  return result;
};

const startProgressionGame = () => {
  const sizeProgression = randomNumber(6, 8);
  const startProgression = randomNumber(0, 1);
  const stepProgression = randomNumber(1, 2);

  const progression = getProgression(sizeProgression, startProgression, stepProgression);

  const hiddenIndex = randomNumber(0, progression.length);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';

  return [progression.join(' '), String(hiddenNumber)];
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = startProgressionGame();
    const userAnswer = readlineSync.question(`${'Question: '}${question} ${'\nYour answer: '}`);
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer}${' is wrong answer ;(. Correct answer was '}${rightAnswer}${"\nLet's try again"},${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
