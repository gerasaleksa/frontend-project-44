import basisGames from '../index.js';

const rule = 'What number is missing in the progression?';

const randomNumber = (from, to) => Math.round(Math.random() * (to - from) + from);

const getProgression = (size, start = 0, step = 1) => {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push(start + (step * i));
  }
  return result;
};

const game = () => {
  const sizeProgression = randomNumber(6, 8);
  const startProgression = randomNumber(0, 1);
  const stepProgression = randomNumber(1, 2);
  const progression = getProgression(sizeProgression, startProgression, stepProgression);
  const hiddenIndex = randomNumber(0, progression.length);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const rightAnswer = String(hiddenNumber);
  const question = progression.join(' ');
  return [rightAnswer, question];
};

const isGameProg = () => {
  basisGames(game, rule);
};
export default isGameProg;
