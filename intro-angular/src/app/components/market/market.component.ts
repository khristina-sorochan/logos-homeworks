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
      imageUrl: 'https://www.mobile-review.com/sadm_images//models/apple/iphone-7.jpg'
    },
    {
      name: 'iPhone 8',
      price: 450,
      imageUrl: 'https://cdn11.bigcommerce.com/s-wsszta3/images/stencil/1280x1280/products/11475/80556/425061__83298.1597086471.jpg?c=2'
    },
    {
      name: 'iPhone X',
      price: 500,
      imageUrl: 'https://lh3.googleusercontent.com/proxy/S5hVAg0BBuzY4EfRl-DeKE_gzMf4EaP6Oyw4Lm6BD8Jrs1qd6HDM-SU-GKJAWm_IoMmfJwE9ukWI-i7w5MKudi76ANUrDCT5qSGsosRtlijCBgBl0CUnk0vMbam9Ug',
      onSale: true
    },
    {
      name: 'Apple Watch 3',
      price: 350,
      imageUrl: 'https://psp.cwa.sellercloud.com/images/products/3298907.jpg',
      onSale: true
    },
    {
      name: 'Samsung Galaxy S10',
      price: 420,
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
