import basisGames from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (numsave) => {
  for (let i = 2; i < numsave; i += 1) {
    if (numsave % i === 0) {
      return false;
    }
  }
  return numsave > 1;
};

const game = () => {
  const numsave = (Math.round(Math.random() * 100));
  const rightAnswer = isPrime(numsave) ? 'yes' : 'no';
  const question = numsave;
  return [rightAnswer, question];
};

const isGamePrime = () => {
  basisGames(game, rule);
};

export default isGamePrime;
