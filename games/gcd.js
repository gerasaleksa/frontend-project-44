import readlineSync from 'readline-sync';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const gameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = (Math.round(Math.random() * 100));
    const num2 = (Math.round(Math.random() * 100));
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${num2} ${'\nYour answer: '}`);
    const rightansw = NOD(num1, num2);
    const answstr = `${str}${rightansw}`;
    if (quest === answstr) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${rightansw}${"\nLet's try again"},${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameGcd;
