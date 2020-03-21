import { TaskTimePipe } from './task-time.pipe';

const daysBefore = (n: number): Date => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
};
describe('TaskTimePipe', () => {
  const pipe = new TaskTimePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return string included a number', () => {
    const matchDays = (str: string) => str.match(/\d+/);
    expect(matchDays(pipe.transform(daysBefore(3)))).toBeTruthy();
    expect(matchDays(pipe.transform(daysBefore(60)))).toBeTruthy();
    expect(matchDays(pipe.transform(daysBefore(0)))).toBeTruthy();
    expect(matchDays(pipe.transform(daysBefore(-3)))).toBeTruthy();
  });
  it('return the correct number of days', () => {
    const matchDays = (str: string) => str.match(/\d+/);
    let match;
    match = matchDays(pipe.transform(daysBefore(3)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(3);
    match = matchDays(pipe.transform(daysBefore(60)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(60);
    match = matchDays(pipe.transform(daysBefore(0)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(0);
    match = matchDays(pipe.transform(daysBefore(-3)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(3);
    match = matchDays(pipe.transform(daysBefore(-6)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(6);
    match = matchDays(pipe.transform(daysBefore(-10)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(10);
    match = matchDays(pipe.transform(daysBefore(-17)));
    expect(match).toBeTruthy();
    expect(+match[0]).toBe(17);
  });
  it('detect correctly if it\'s past or future', () => {
    const delay = /delay/;
    const left = /left/;
    expect(delay.test(pipe.transform(daysBefore(100)))).toBeTrue();
    expect(delay.test(pipe.transform(daysBefore(10)))).toBeTrue();
    expect(delay.test(pipe.transform(daysBefore(3)))).toBeTrue();
    expect(left.test(pipe.transform(daysBefore(0)))).toBeTrue();
    expect(left.test(pipe.transform(daysBefore(-3)))).toBeTrue();
    expect(left.test(pipe.transform(daysBefore(-10)))).toBeTrue();
    expect(left.test(pipe.transform(daysBefore(-100)))).toBeTrue();
  });
});
