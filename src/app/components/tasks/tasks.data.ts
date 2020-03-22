import {MinutesBeforePipe} from '../../pipes/minutes-before.pipe';
import {Task} from '../../models/task';

const getDate = new MinutesBeforePipe().transform;

export const tasks: Task[] = [
  {
    title: 'New website for Symu.co',
    time: getDate(-60 * 24 * 5 - 14)
  }, {
    title: 'Free business PSD Template',
    time: getDate(-60 * 24 * 2 - 4)
  }, {
    title: 'New logo for JCD.pl',
    time: getDate(60 * 24 * 5 + 34)
  }, {
    title: 'Free Icons Set vol. 3',
    time: getDate(60 * 24 * 10 + 84)
  }
];
