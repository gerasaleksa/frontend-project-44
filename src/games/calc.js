import basisGames from '../index.js';
import getRandomNum from '../random.js';

const rule = 'What is the result of the expression?';

const rangemin = 1;
const rangemax = 100;

const randsign = () => {
  const coll = ['-', '+', '*'];
  const random = getRandomNum() * coll.length;
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
  const num1 = getRandomNum(rangemin, rangemax);
  const num2 = getRandomNum(rangemin, rangemax);
  const sign = randsign();
  const str = '';
  const question = `${num1} ${sign} ${num2}`;
  const myans = calculate(num1, num2, sign);
  const rightansw = `${str}${myans}`;
  return [rightansw, question];
};
const getGameCalc = () => {
  basisGames(game, rule);
};

export default getGameCalc;
