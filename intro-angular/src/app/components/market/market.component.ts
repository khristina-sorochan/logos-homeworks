import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  products: any[] = [
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
      price: 500
    },
    {
      name: 'Apple Watch 3',
      price: 350
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

  receiveNewPrice(price: number): void {
    this.sum += price;
  }

}
