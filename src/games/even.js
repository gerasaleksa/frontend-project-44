import basisGames from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const numsave = (Math.round(Math.random() * 100));
  const rightAnswer = (numsave % 2 === 0) ? 'yes' : 'no';
  const question = numsave;
  return [rightAnswer, question];
};
const isGameEven = () => {
  basisGames(game, rule);
};
export default isGameEven;
