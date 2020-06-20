import "jest";
import { count } from "../../src";
import { countFromTo } from "../../src/count";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;

describe('count', () => {

  test('count.for', () => {
    const collected: number[] = [];
    count(20).for(index => collected.push(index));
    expect(collected).toMatchSnapshot();
  });

  test('count.for with step', () => {
    const collected: number[] = [];
    count(10, 2).for(index => collected.push(index));
    expect(collected).toMatchSnapshot();
  });

  test('count.for with break', () => {
    const collected: number[] = [];
    count(20).for((index, breakIt) => {
      collected.push(index);
      if (index === 9) breakIt();
    });
    expect(collected.length).toBe(10);
  });

  test('count.map', () => {
    const mapped = count(20).map<number>(index => 2000 + index);
    expect(mapped).toMatchSnapshot();
  });

  test('countFromTo.map', () => {
    const mapped = countFromTo(10, 20).map<number>(index => 2000 + index);
    expect(mapped).toMatchSnapshot();
  });

  test('reduce', () => {
    const reduced = count(10).reduce<{ [key: string]: string }>((acc, index) => {
      acc[`key-${index}`] = `Key is ${index}`;
      return acc;
    }, {});
    expect(reduced).toMatchSnapshot();
  });
});
