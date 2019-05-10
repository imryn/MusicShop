import { Injectable } from '@angular/core';
import {DataService} from './data-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  lsName = 'cart';
  cart = this.getCart();

  constructor(private dataService: DataService) {
  }

   onProductAdd(item) {
    if (this.cart[item.title]) {
       this.cart[item.title]++;
    } else {
      this.cart[item.title] = 1;
    }
    this.cart[item.title] = this.cart[item.title] ? this.cart[item.title]++ : 1;
    this.saveCart();
  }

  onProductRemove(item) {
    if (this.cart[item.title]) {
      this.cart[item.title]--;
      if (this.cart[item.title] === 0) {
         delete this.cart[item.title];
      }
      this.saveCart();
    }
  }

  totalCalc() {
    return Object.values(this.cart).reduce((sum: number, value: number) => sum + value, 0);
  }

  totalCost() {
    return Object.keys(this.cart).reduce((sum , title) => {
      const item = this.dataService.findItemByTitle(title);
      return sum + item.cost * this.cart[title];
    }, 0 );
  }

  getCart() {
    const cart = localStorage.getItem(this.lsName);
    return (cart ? JSON.parse(cart) : {});
  }

  saveCart() {
    localStorage.setItem(this.lsName, JSON.stringify(this.cart));
  }

}

