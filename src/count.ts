export const countFromTo = (from: number, to: number, step = 1) => {
  return {
    for: (cb: (index: number, cbBreak: any) => void): void => {
      for (let index = from; index < to; index += step) {
        let shouldBreak = false;
        const cbBreak = () => shouldBreak = true;
        cb(index, cbBreak);
        if (shouldBreak) break;
      }
    },
    map: <T = any>(cb: (index: number) => T): T[] => {
      const output: T[] = [];
      countFromTo(from, to).for(index => output.push(cb(index)));
      return output;
    },
  };
};

export const count = (countTo: number, step = 1) => countFromTo(0, countTo, step);
