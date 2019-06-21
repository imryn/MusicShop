import { Component, OnInit} from '@angular/core';
import {CartService} from './../cart.service';
import {UserService} from './../user.service';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.scss']
})
export class CartInfoComponent implements OnInit {

  constructor(private cartService: CartService, public userService: UserService) { 

  }

  ngOnInit() {
  }

  totalCalc() {
    return this.cartService.totalCalc();
  }

  totalCost() {
    return this.cartService.totalCost();
  }

}
