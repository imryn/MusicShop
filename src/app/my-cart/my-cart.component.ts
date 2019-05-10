import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from './typing';
import { DataService } from '../data-service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent {
  cart: Cart;
  items = [];

  constructor(private cartService: CartService, private dataService: DataService) {
    this.cart = this.cartService.getCart();
    this.items = Object.keys(this.cart).map((title) => {
      return this.dataService.findItemByTitle(title);
    });

  }

}
