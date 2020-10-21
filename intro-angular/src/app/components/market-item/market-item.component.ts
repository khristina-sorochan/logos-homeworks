import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketService} from "../../services/market.service";
import {IBasketItem} from "../basket/basket.component";

@Component({
  selector: 'app-market-item',
  templateUrl: './market-item.component.html',
  styleUrls: ['./market-item.component.scss']
})

// export class MarketItemComponent implements OnInit {
//
//   count = 0;
//
//   @Input('product') product: any;
//   @Output('boughtProduct') boughtProduct = new EventEmitter();
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
//   buyProduct(price: number): void {
//     this.boughtProduct.emit(price);
//     this.count++;
//   }
//
// }

export class MarketItemComponent implements OnInit {

  @Input('product') product: IBasketItem;

  constructor(public marketService: MarketService) { }

  ngOnInit(): void {
  }

  buyProduct(obj: IBasketItem): void {
    this.marketService.$basketSubject.next(obj);
  }

}
