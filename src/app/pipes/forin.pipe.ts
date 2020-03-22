import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forin'
})
export class ForinPipe implements PipeTransform {

  transform(value: number): number[] {
    return Array.from(Array(value), (t, i) => i);
  }

}
