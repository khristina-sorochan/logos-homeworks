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
      price: 400,
      date: new Date(),
      imageUrl: 'https://www.mobile-review.com/sadm_images//models/apple/iphone-7.jpg'
    },
    {
      name: 'iPhone 8',
      price: 450,
      date: new Date(),
      imageUrl: 'https://cdn11.bigcommerce.com/s-wsszta3/images/stencil/1280x1280/products/11475/80556/425061__83298.1597086471.jpg?c=2'
    },
    {
      name: 'iPhone X',
      price: 500,
      date: new Date(),
      imageUrl: 'https://lh3.googleusercontent.com/proxy/fICxAcIspu0lU5vcO9XDfKn0hTqN9HH3tthyQRPat2A3Lm8mngpUfO1CgYowSPw1aEsbiqiHBgIp9oA-WpIbY0zL8w2ZStCNiYjPvH2Qf2jLOj09Rs14gGM7V1fUlQ',
      onSale: true
    },
    {
      name: 'Apple Watch 3',
      price: 350,
      date: new Date(),
      imageUrl: 'https://psp.cwa.sellercloud.com/images/products/3298907.jpg',
      onSale: true
    },
    {
      name: 'Samsung Galaxy S10',
      price: 420,
      date: new Date(),
      imageUrl: 'https://smartfonoff.mobi/wp-content/uploads/bfi_thumb/Samsung-Galaxy-S10-colors-6p4igdc1fod20vboai700x99vf0jrurqnv5acnng90w.jpg',
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
