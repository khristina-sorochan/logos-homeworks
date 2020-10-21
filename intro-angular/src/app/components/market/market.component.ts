import { Component, OnInit } from '@angular/core';
import {IBasketItem} from "../basket/basket.component";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  products: IBasketItem[] = [
    {
      name: 'iPhone 7',
      price: 400
    },
    {
      name: 'iPhone 8',
      price: 450
    },
    {
      name: 'iPhone X',
      price: 500,
      onSale: true
    },
    {
      name: 'Apple Watch 3',
      price: 350,
      onSale: true
    },
    {
      name: 'Samsung Galaxy',
      price: 420
    }
  ];

  sum = 0;

  constructor() { }

  ngOnInit(): void {
  }

  // receiveNewPrice(price: number): void {
  //   this.sum += price;
  // }

}
