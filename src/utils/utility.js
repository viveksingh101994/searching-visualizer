import { ALGORITHMS_CONSTANTS } from '../constants/constant';
import { randomNumberGenerator } from './math';

export const getElementsAsPerAlgorithm = (algorithm) => {
  const array = [];
  for (let i = 0; i <= 10; i += 1) {
    array.push({
      num: randomNumberGenerator(5, 500),
      visited: false,
      result: false,
    });
  }
  if (algorithm !== ALGORITHMS_CONSTANTS.linearSearch) {
    array.sort((a, b) => a.num - b.num);
  }
  return array;
};

export const timer = (ms) => new Promise((res) => setTimeout(res, ms));
