import { Component, OnInit } from '@angular/core';
import {MarketService} from "../../services/market.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  // item: number = 0;
  // str: string = 'aaa';
  // isValue: boolean = true;
  // some: undefined = undefined;
  // a = null;
  //
  // arrStr: string[] = [];
  // arrNum: number[] = [];
  //
  // obj: {} = {};
  // obj1: any = {};
  // typeof a;

  basketItems: IBasketItem[] = [];

  constructor(public marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService.$basketSubject.subscribe((newItem: IBasketItem) => {
      this.basketItems.push(newItem);
    });
  }

  getTotalPrice(items: IBasketItem[]): number {
    let sum = 0;
    items.forEach(item => sum += item.price);
    return sum;
  }

  removeItem(i: number) {
    this.basketItems.splice(i, 1)
  }

  ngOnDestroy() {
    // this.marketService.$basketSubject.unsubscribe();
  }

}

export interface IBasketItem {
  name: string;
  price: number;
  onSale?: boolean;
}
