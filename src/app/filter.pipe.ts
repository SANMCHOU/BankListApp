import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filter1: string) {
    if (filter1.length === 0 || filter1 == '') {
      return value;
    }
    const newArray = [];
    for (let newVal of value) {
      if (newVal.address.toLocaleLowerCase().includes(filter1.toLocaleLowerCase())) {
        newArray.push(newVal);
      }
      else if (newVal.name.toLocaleLowerCase().includes(filter1.toLocaleLowerCase())) {
        newArray.push(newVal);
      }
      else if (newVal.countryName.toLocaleLowerCase().includes(filter1.toLocaleLowerCase())) {
        newArray.push(newVal);
      }
    }
    return newArray;
  }

}
