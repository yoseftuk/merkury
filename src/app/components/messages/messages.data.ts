import {Message} from '../../models/message';
import {MinutesBeforePipe} from '../../pipes/minutes-before.pipe';
const getDate = new MinutesBeforePipe().transform;

export const messages: Message[] = [
  {
    name: 'Nina Jones',
    msg: 'Hey you! its me again :-) I attached new file about the bal bla',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(5),
    unread: true,
  },
  {
    name: 'Nina Jones',
    msg: 'Hey! I attached some new PSD files for the new homepage',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(20),
    unread: true,
  },
  {
    name: 'Nina Jones',
    msg: 'Good morning, you are fired!',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(60 * 24 * 2 + 20),
    unread: false,
  },
  {
    name: 'Nina Jones',
    msg: 'Hello! could you bring me coffee please?',
    image: 'assets/images/profile_placeholder.png',
    time: getDate(60 * 24 * 14 + 120),
    unread: false,
  }
];
