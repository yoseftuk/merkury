import {Activity} from '../../models/activity';
import {MinutesBeforePipe} from '../../pipes/minutes-before.pipe';

const getDate = new MinutesBeforePipe().transform;
// function getDate(minutesBefore): Date {
//   const d = new Date();
//   d.setMinutes(d.getMinutes() - minutesBefore);
//   return d;
// }
export enum ActivityTypes {
  NEW_PROJECT,
  NEW_TASK,
  COMPLETE_PROJECT,
  COMPLETE_TASK,
  COMMENT_PROJECT,
  COMMENT_TASK
}
export const activities: Activity[] = [
  {
    name: 'Nina Jones',
    type: ActivityTypes.NEW_PROJECT,
    subject: 'Free UI Kit',
    image: 'assets/images/profile_placeholder.png',
    time: new Date()
  },
  {
    name: 'James Smith',
    type: ActivityTypes.COMMENT_PROJECT,
    subject: 'Free PSD Template',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(40)
  },
  {
    name: 'Alex Clooney',
    type: ActivityTypes.COMPLETE_TASK,
    subject: 'Symu Website',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(60)
  },
  {
    name: 'Alexandra Spears',
    type: ActivityTypes.NEW_PROJECT,
    subject: 'Free PSD Template',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(180)
  }
];
