import { Component, OnInit } from '@angular/core';
import {MarketService} from "../../services/market.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketItems: any[] = [];

  constructor(public marketService: MarketService) { }

  ngOnInit(): void {
    this.marketService.$basketSubject.subscribe((newItem) => {
      this.basketItems.push(newItem);
    });
  }

  getTotalPrice(items: any[]): number {
    let sum = 0;
    items.forEach(item => sum += parseInt(item.price))
    return sum;
  }

  removeItem(i: number) {
    this.basketItems.splice(i, 1)
  }

  ngOnDestroy() {
    // this.marketService.$basketSubject.unsubscribe();
  }

}
