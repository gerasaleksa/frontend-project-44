import basisGames from '../index.js';
import getRandomNum from '../random.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const rangemin = 1;
const rangemax = 100;

const game = () => {
  const numsave = getRandomNum(rangemin, rangemax);
  const rightAnswer = (numsave % 2 === 0) ? 'yes' : 'no';
  const question = numsave;
  return [rightAnswer, question];
};
const getGameEven = () => {
  basisGames(game, rule);
};
export default getGameEven;
