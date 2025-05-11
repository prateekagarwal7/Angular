import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyconvertor',
  standalone: true
})
export class CurrencyconvertorPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    
    if (args.length > 0) {
      console.log(args)
      let [data] = args
      return value * data
    } else {
      return value * 100;
    }
  }

}
