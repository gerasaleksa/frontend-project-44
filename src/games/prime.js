import basisGames from '../index.js';
import getRandomNum from '../random.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const rangemin = 1;
const rangemax = 100;

const isPrime = (numsave) => {
  for (let i = 2; i < numsave; i += 1) {
    if (numsave % i === 0) {
      return false;
    }
  }
  return numsave > 1;
};

const game = () => {
  const numsave = getRandomNum(rangemin, rangemax);
  const rightAnswer = isPrime(numsave) ? 'yes' : 'no';
  const question = numsave;
  return [rightAnswer, question];
};

const getGamePrime = () => {
  basisGames(game, rule);
};

export default getGamePrime;
