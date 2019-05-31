import { Component, OnInit } from '@angular/core';
import {CartService} from './../cart.service';
import {DataService} from './../data-service';
import { UserService } from '../user.service';

// import {ITEMS} from './../items';
import {Item} from './../item';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchValue: string;
  searchResult: object;
  // albumsData = ITEMS;
  albumsData: Observable<Item[]>;
 

  constructor(private cartService: CartService, private dataService: DataService, private userService: UserService) {
    this.onProductAdd = this.onProductAdd.bind(this);
    this.onProductRemove = this.onProductRemove.bind(this);
  }

  ngOnInit() {
    this.albumsData = this.userService.getItems();
    console.log(this.albumsData);
  }

  // onSubmit() {
  //   if (this.searchValue) {
  //     this.albumsData = this.dataService.searchByTitle(this.searchValue);
  //   } else {
  //     this.albumsData = ITEMS;
  //   }
  // }

  onProductAdd(item) {
    this.cartService.onProductAdd(item);
  }

  onProductRemove(item) {
    this.cartService.onProductRemove(item);
  }

}
