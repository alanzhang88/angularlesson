import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let copy = '';

    let j = value.length - 1;
    while(j>=0){
      copy = copy + value[j];
      j--;
    }
    return copy;
  }

}
