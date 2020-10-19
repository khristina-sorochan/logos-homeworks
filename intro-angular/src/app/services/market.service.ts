import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  $basketSubject = new Subject()

  constructor() { }
}
