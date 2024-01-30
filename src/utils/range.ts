const DEFAULT_RANGE_STEP = 1;

export const range = (start: number, end?: number, step = DEFAULT_RANGE_STEP) => {
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }

  const output = [];

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
