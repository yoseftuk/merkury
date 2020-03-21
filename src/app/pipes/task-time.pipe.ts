import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'taskTime'
})
export class TaskTimePipe implements PipeTransform {

  transform(value: Date): string {
    const d = new Date();
    const d1 = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const d2 = new Date(value.getFullYear(), value.getMonth(), value.getDate());
    const dayDiff = Math.round((d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24));
    return dayDiff > 0 ? `${-dayDiff} days delays` : `${dayDiff} days left`;
  }

}
