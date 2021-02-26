export const ALGORITHMS_CONSTANTS = {
  linearSearch: 'linear-search',
  binarySearch: 'binary-search',
  jumpSearch: 'jump-search',
  interpolationSearch: 'interpolation-search',
  fibonacciSearch: 'fibonacci-search',
  exponentialSearch: 'exponential-search',
};

export const algorithms = () => {
  return Object.values(ALGORITHMS_CONSTANTS);
};
