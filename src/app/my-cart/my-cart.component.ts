import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from './typing';
import { DataService } from '../data-service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent {
  cart: Cart;
  items = [];
  cost: number[];
  totalCost: number;

  constructor(private cartService: CartService, private dataService: DataService) {
    this.cart = this.cartService.getCart();
    this.items = Object.keys(this.cart).map((title) => {
      const item = this.dataService.findItemByTitle(title);
      item.totalCost = this.cart[title] * item.cost;
      return item;
    });

    this.totalCost = cartService.totalCost();

  }

}
