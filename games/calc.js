/* eslint-disable consistent-return */
import readlineSync from 'readline-sync';

const randsign = () => {
  const coll = ['-', '+', '*'];
  const random = Math.floor(Math.random() * coll.length);
  const ran = coll[random];
  return ran;
};

const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
  }
};

const gameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = (Math.round(Math.random() * 100));
    const num2 = (Math.round(Math.random() * 100));
    const sign = randsign();
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${sign} ${num2} ${'\nYour answer: '}`);
    const myans = calculate(num1, num2, sign);
    const rightansw = `${str}${myans}`;
    if (quest === rightansw) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${rightansw}${"\nLet's try again"},${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameCalc;
