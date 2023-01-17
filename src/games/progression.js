import basisGames from '../index.js';
import getRandomNum from '../random.js';

const rule = 'What number is missing in the progression?';

const minNumForSize = 6;
const maxNumForSize = 8;
const minNumForStart = 0;
const maxNumForStart = 1;
const minNumForStep = 1;
const maxNumForStep = 2;

const getProgression = (size, start = 0, step = 1) => {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    result.push(start + (step * i));
  }
  return result;
};

const game = () => {
  const sizeProgression = getRandomNum(minNumForSize, maxNumForSize);
  const startProgression = getRandomNum(minNumForStart, maxNumForStart);
  const stepProgression = getRandomNum(minNumForStep, maxNumForStep);
  const progression = getProgression(sizeProgression, startProgression, stepProgression);
  const hiddenIndex = getRandomNum(0, progression.length);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const rightAnswer = String(hiddenNumber);
  const question = progression.join(' ');
  return [rightAnswer, question];
};

const getGameProg = () => {
  basisGames(game, rule);
};
export default getGameProg;
