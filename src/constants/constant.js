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

export const getAlgorithmsDescription = (algorithm) => {
  switch (algorithm) {
    case ALGORITHMS_CONSTANTS.binarySearch:
      return getComplexityWithText(
        ALGORITHMS_DESCRIPTION.binarySearch.complexity
      );
    case ALGORITHMS_CONSTANTS.jumpSearch:
      return getComplexityWithText(
        ALGORITHMS_DESCRIPTION.jumpSearch.complexity
      );
    case ALGORITHMS_CONSTANTS.interpolationSearch:
      return getComplexityWithText(
        ALGORITHMS_DESCRIPTION.interpolationSearch.complexity
      );
    case ALGORITHMS_CONSTANTS.exponentialSearch:
      return getComplexityWithText(
        ALGORITHMS_DESCRIPTION.exponentialSearch.complexity
      );
    case ALGORITHMS_CONSTANTS.fibonacciSearch:
      return getComplexityWithText(
        ALGORITHMS_DESCRIPTION.fibonacciSearch.complexity
      );
    case ALGORITHMS_CONSTANTS.linearSearch:
    default:
      return getComplexityWithText(
        ALGORITHMS_DESCRIPTION.linearSearch.complexity
      );
  }
};

const getComplexityWithText = (complexity) => {
  let complexities = [];
  for (let item in complexity) {
    complexities.push(`${COMPLEXITY_TEXT[item]}: ${complexity[item]}`);
  }
  return complexities;
};

const COMPLEXITY_TEXT = {
  worst: 'WORST CASE PERFORMANCE',
  best: 'BEST CASE PERFORMANCE',
  average: 'AVERAGE CASE PERFORMANCE',
};

const ALGORITHMS_DESCRIPTION = {
  linearSearch: {
    complexity: {
      worst: 'O(1)',
      best: 'O(1)',
      average: 'O(n/2)',
    },
  },
  binarySearch: {
    complexity: {
      worst: 'O(1)',
      best: 'O(1)',
      average: 'O(log n)',
    },
  },
  jumpSearch: {
    complexity: {
      worst: 'O(1)',
      best: 'O(1)',
      average: 'O(√n)',
    },
  },
  interpolationSearch: {
    complexity: {
      worst: 'O(1)',
      best: 'O(1)',
      average: 'O(log log n)',
    },
  },
  exponentialSearch: {
    complexity: {
      worst: 'O(1)',
      best: 'O(1)',
      average: 'O(log n)',
    },
  },
  fibonacciSearch: {
    complexity: {
      worst: 'O(1)',
      best: 'O(1)',
      average: 'O(log n)',
    },
  },
};
