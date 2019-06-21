import { Component } from '@angular/core';
import { CartService } from './../cart.service';
import { DataService } from './../data-service';
import { UserService } from '../user.service';
import { Item } from '../my-cart/typing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchValue: string;
  searchResult: object;
  albumsData: Item[];

  constructor(private cartService: CartService, private dataService: DataService, private userService: UserService) {
    this.onProductAdd = this.onProductAdd.bind(this);
    this.onProductRemove = this.onProductRemove.bind(this);
    this.loadAllItems();
  }

  loadAllItems() {
    this.userService.getItemsData().then(data => {
      this.albumsData = data;
    });
  }

  onSubmit() {
    if (this.searchValue) {
      this.albumsData = this.dataService.searchByTitle(this.searchValue);
    } else {
      this.loadAllItems();
    }
  }

  onProductAdd(item) {
    this.cartService.onProductAdd(item);
  }

  onProductRemove(item) {
    this.cartService.onProductRemove(item);
  }

}
