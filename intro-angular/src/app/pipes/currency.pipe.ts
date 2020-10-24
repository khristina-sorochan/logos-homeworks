import { Pipe, PipeTransform } from '@angular/core';
import {rejects} from "assert";

@Pipe({
  name: 'myCurrPipe'
})
export class CurrencyPipe implements PipeTransform {

  rates: any;

  async transform(value: number, cur: string): Promise<string> {
    try {
      this.rates = await this.getRates();
      let returnedValue = value;
      for (let key in this.rates) {
        if (key === cur) returnedValue = value * this.rates[key];
      }
      return returnedValue.toString(10);
    } catch (err) {
      throw new Error(err);
    }
  }

  async getRates(): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch('https://api.exchangeratesapi.io/latest?base=USD', {
        method: 'get'
      }).then(res => res.json())
        .then(res => {
          resolve(res['rates']);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

}
