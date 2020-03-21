import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityTime'
})
export class ActivityTimePipe implements PipeTransform {

  transform(value: Date): string {
    const time = (new Date().getTime() - value.getTime()) / 1000 / 60;
    if (time >= 60 * 24 * 7) {
      return `About ${Math.round(time / 60 / 24 / 7)} weeks ago`;
    }
    if (time >= 60 * 24) {
      return `${Math.floor(time / 60 / 24)} days ago`;
    }
    if (time >= 60) {
      return `${Math.floor(time / 60)} hours ago`;
    }
    if (time >= 1) {
      return `${Math.floor(time)} minutes ago`;
    }
    return 'Just now';
  }

}
