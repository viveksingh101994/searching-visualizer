export const ALGORITHMS_CONSTANTS = {
  linearSearch: 'Linear search',
  binarySearch: 'Binary search',
  jumpSearch: 'Jump search',
  interpolationSearch: 'Interpolation search',
  exponentialSearch: 'Exponential search',
  fibonacciSearch: 'Fibonacci search',
};

export const algorithms = () => {
  return Object.values(ALGORITHMS_CONSTANTS);
};
