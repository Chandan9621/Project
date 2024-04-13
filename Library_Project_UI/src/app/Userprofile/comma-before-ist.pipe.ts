import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaBeforeIST'
})
export class CommaBeforeISTPipe implements PipeTransform {

  transform(value: string) {

    const istIndex = value.indexOf('IST');
     if (istIndex !== -1) {
       return value.slice(0,istIndex)+','+ value.slice(istIndex);
    }
     return value;
  }

}

