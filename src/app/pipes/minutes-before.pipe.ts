import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesBefore'
})
export class MinutesBeforePipe implements PipeTransform {

  transform(value: number): Date {
    const d = new Date();
    d.setMinutes(d.getMinutes() - value);
    return d;
  }

}
