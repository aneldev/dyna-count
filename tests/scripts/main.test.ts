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

  test('count.map', () => {
    const mapped = count(20).map<number>(index => 2000 + index);
    expect(mapped).toMatchSnapshot();
  });

  test('countFromTo.map', () => {
    const mapped = countFromTo(10, 20).map<number>(index => 2000 + index);
    expect(mapped).toMatchSnapshot();
  });
});
