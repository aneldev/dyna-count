export const countFromTo = (from: number, to: number) => {
  return {
    for: (cb: (index: number) => void): void => {
      for (let index = from; index < to; index++) cb(index);
    },
    map: <T>(cb: (index: number) => T): T[] => {
      const output: T[] = [];
      countFromTo(from, to).for(index => output.push(cb(index)));
      return output;
    },
  };
};

export const count = (countTo: number) => countFromTo(0, countTo);
