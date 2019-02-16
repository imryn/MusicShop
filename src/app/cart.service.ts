import { Injectable } from '@angular/core';
import {DataService} from './data-service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: object;

  constructor(private dataService: DataService) {
    this.cart = {};
   }

   onProductAdd(item){
    if(this.cart[item.title]){
       this.cart[item.title]++;
    } else {
      this.cart[item.title] = 1;
    }

    this.cart[item.title] = this.cart[item.title] ? this.cart[item.title]++ : 1;
  }

  onProductRemove(item){
    if(this.cart[item.title]) {
      this.cart[item.title]--;
      if(this.cart[item.title] == 0){
         delete this.cart[item.title];
      }
    }
  }

  totalCalc() {
    const totalCart = Object.values(this.cart).reduce((sum, value) => sum + value, 0);
    return totalCart;
  }

  totalCost(){
    let sum = 0 ;
    for(let title in this.cart) {
        const item = this.dataService.findItemByTitle(title);
        sum = sum + item.cost * this.cart[title];
    }
    return sum;
  }
}
