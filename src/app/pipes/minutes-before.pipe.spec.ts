import { MinutesBeforePipe } from './minutes-before.pipe';

describe('MinutesBeforePipe', () => {
  const pipe = new MinutesBeforePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return the correct time', () => {
    let d;
    d = new Date();
    expect(pipe.transform(5).getTime()).toEqual(d.getTime() - 5 * 60 * 1000);
    d = new Date();
    expect(pipe.transform(65).getTime()).toEqual(d.getTime() - 65 * 60 * 1000);
    d = new Date();
    expect(pipe.transform(32).getTime()).toEqual(d.getTime() - 32 * 60 * 1000);
    d = new Date();
    expect(pipe.transform(1024).getTime()).toEqual(d.getTime() - 1024 * 60 * 1000);
  });
  it('should return future time in case of negative input', () => {
    let d;
    d = new Date();
    expect(pipe.transform(-5).getTime()).toEqual(d.getTime() + 5 * 60 * 1000);
    d = new Date();
    expect(pipe.transform(-65).getTime()).toEqual(d.getTime() + 65 * 60 * 1000);
    d = new Date();
    expect(pipe.transform(-32).getTime()).toEqual(d.getTime() + 32 * 60 * 1000);
    d = new Date();
    expect(pipe.transform(-1024).getTime()).toEqual(d.getTime() + 1024 * 60 * 1000);
  });
});
