import basisGames from '../index.js';
import getRandomNum from '../random.js';

const rule = 'Find the greatest common divisor of given numbers.';

const rangemin = 1;
const rangemax = 100;

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const game = () => {
  const num1 = getRandomNum(rangemin, rangemax);
  const num2 = getRandomNum(rangemin, rangemax);
  const str = '';
  const question = `${num1} ${num2}`;
  const answer = NOD(num1, num2);
  const rightAnswer = `${str}${answer}`;
  return [rightAnswer, question];
};
const getGameGcd = () => {
  basisGames(game, rule);
};
export default getGameGcd;
