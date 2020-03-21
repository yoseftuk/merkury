import { ActivityTimePipe } from './activity-time.pipe';

const timer = (scale: number) => (time: number): Date => new Date(new Date().getTime() - time * scale);
describe('ActivityTimePipe', () => {
  const pipe = new ActivityTimePipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return "Just now" for future time or less then 1 minute', () => {
    const time = timer(1);
    expect(pipe.transform(time(5000))).toEqual('Just now');
    expect(pipe.transform(time(1000))).toEqual('Just now');
    expect(pipe.transform(time(0))).toEqual('Just now');
    expect(pipe.transform(time(-5000))).toEqual('Just now');
    expect(pipe.transform(time(-10000))).toEqual('Just now');
    expect(pipe.transform(time(-10e6))).toEqual('Just now');
  });
  it('return time in minutes when under hour', () => {
    const time = timer(1000 * 60);
    const term = 'minutes ago';
    expect(pipe.transform(time(1))).toEqual(`1 ${term}`);
    expect(pipe.transform(time(2))).toEqual(`2 ${term}`);
    expect(pipe.transform(time(50))).toEqual(`50 ${term}`);
    expect(pipe.transform(time(50.5))).toEqual(`50 ${term}`);
    expect(pipe.transform(time(59))).toEqual(`59 ${term}`);
  });
  it('return time in hours when under day', () => {
    const time = timer(1000 * 60 * 60);
    const term = 'hours ago';
    expect(pipe.transform(time(1))).toEqual(`1 ${term}`);
    expect(pipe.transform(time(2))).toEqual(`2 ${term}`);
    expect(pipe.transform(time(20))).toEqual(`20 ${term}`);
    expect(pipe.transform(time(20.3))).toEqual(`20 ${term}`);
    expect(pipe.transform(time(23))).toEqual(`23 ${term}`);
  });
  it('return time in days when under week', () => {
    const time = timer(1000 * 60 * 60 * 24);
    const term = 'days ago';
    expect(pipe.transform(time(1))).toEqual(`1 ${term}`);
    expect(pipe.transform(time(2))).toEqual(`2 ${term}`);
    expect(pipe.transform(time(4))).toEqual(`4 ${term}`);
    expect(pipe.transform(time(4.3))).toEqual(`4 ${term}`);
    expect(pipe.transform(time(6.9))).toEqual(`6 ${term}`);
  });
  it('return time in weeks (rounded) when above 1 week', () => {
    const time = timer(1000 * 60 * 60 * 24 * 7);
    const term = 'weeks ago';
    expect(pipe.transform(time(1))).toEqual(`About 1 ${term}`);
    expect(pipe.transform(time(2))).toEqual(`About 2 ${term}`);
    expect(pipe.transform(time(5.3))).toEqual(`About 5 ${term}`);
    expect(pipe.transform(time(5.6))).toEqual(`About 6 ${term}`);
    expect(pipe.transform(time(18.8))).toEqual(`About 19 ${term}`);
    expect(pipe.transform(time(20))).toEqual(`About 20 ${term}`);
    expect(pipe.transform(time(20.3))).toEqual(`About 20 ${term}`);
    expect(pipe.transform(time(23))).toEqual(`About 23 ${term}`);
  });
});
