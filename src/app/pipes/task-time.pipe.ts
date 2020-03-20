import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskTime'
})
export class TaskTimePipe implements PipeTransform {

  transform(value: Date): string {
    const dayDiff = ((new Date().getTime() - value.getTime()) / 1000 / 60 / 60 / 24) >> 0;
    return dayDiff < 0 ? `${-dayDiff} days delays` : `${dayDiff} days left`;
  }

}
