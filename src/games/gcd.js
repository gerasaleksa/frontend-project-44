import basisGames from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const game = () => {
  const num1 = (Math.round(Math.random() * 100));
  const num2 = (Math.round(Math.random() * 100));
  const str = '';
  const question = `${num1} ${num2}`;
  const answer = NOD(num1, num2);
  const rightAnswer = `${str}${answer}`;
  return [rightAnswer, question];
};
const isGameGcd = () => {
  basisGames(game, rule);
};
export default isGameGcd;
