import { Algorithms } from '../redux/algorithm-selector-reducer/alogrithm-selector-types';
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
  if (algorithm === Algorithms.binarySearch) {
    array.sort((a, b) => a.num - b.num);
  }
  return array;
};

export const timer = (ms) => new Promise((res) => setTimeout(res, ms));
