import readlineSync from 'readline-sync';

const range = (start, end) => {
  const xs = [];
  for (let i = start; i < end; i += 1) {
    xs.push(i);
  }
  return xs;
};
const arithmeticProgression = (size, start = 0, step = 1) => {
  const xs = [];
  for (let i of range(0, size)) {
    xs.push(start + (step * i));
  }
  return xs;
};
const randomInteger = (from, to) => {
  return Math.round(Math.random() * (to - from) + from);
};

const randomOffset = (xs) => {
  if (xs.length === 0) {
    throw new Error("xs must be non-empty");
  }
  return randomInteger(0, xs.length - 1);
};
const progression = arithmeticProgression(randomInteger(6, 8), randomInteger(0, 1), randomInteger(1, 2))

function hideRandomElement(xs) {
  const ys = [...xs];
  const offset = randomOffset(ys);
  const elementToHide = ys[offset];
  ys[offset] = '..';
  return [ys.join(' '), elementToHide];
}

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 3) {
    const quest = readlineSync.question(`${'Question: '}${progression} ${'\nYour answer: '}`);
    if (quest === hideRandomElement) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${hideRandomElement}${"\nLet's try again"},${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
