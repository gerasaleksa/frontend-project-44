import basisGames from '../index.js';

const rule = 'What is the result of the expression?';

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
      return false;
  }
};

const game = () => {
  const num1 = (Math.round(Math.random() * 100));
  const num2 = (Math.round(Math.random() * 100));
  const sign = randsign();
  const str = '';
  const question = `${num1} ${sign} ${num2}`;
  const myans = calculate(num1, num2, sign);
  const rightansw = `${str}${myans}`;
  return [rightansw, question];
};
const isGameCalc = () => {
  basisGames(game, rule);
};

export default isGameCalc;
