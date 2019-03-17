import { Component, OnInit } from '@angular/core';
import {CartService} from './../cart.service';
import {DataService} from './../data-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string;
  item: object;

  constructor(private cartService: CartService, private dataService: DataService) {
    this.onProductAdd = this.onProductAdd.bind(this);
    this.onProductRemove = this.onProductRemove.bind(this);
  }

  ngOnInit() {

  }

  onSubmit() {
    if (this.searchValue) {
      const searchItem = this.searchValue.toLowerCase();
      this.item = this.dataService.findItemByTitle(searchItem);
    }
  }

  onProductAdd(item) {
    this.cartService.onProductAdd(item);
  }

  onProductRemove(item) {
    this.cartService.onProductRemove(item);
  }

}
