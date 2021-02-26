export const ALGORITHMS_CONSTANTS = {
  linearSearch: 'linear-search',
  binarySearch: 'binary-search',
  jumpSearch: 'jump-search',
  interpolationSearch: 'interpolation-search',
};

export const algorithms = () => {
  return Object.values(ALGORITHMS_CONSTANTS);
};
