import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lodash',
  standalone: true,
})
export class LodashPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? `_${value}` : ``;
  }
}
