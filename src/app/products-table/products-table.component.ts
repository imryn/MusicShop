import { Component, OnInit , Input } from '@angular/core';
import {CartService} from './../cart.service';
import { Item } from '../my-cart/typing';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Input() onAdd: Function;
  @Input() onRemove: Function;
  @Input() public data: Item[];

  itemPerPage: number;
  page: number;

  constructor(private cartService: CartService) {
    this.itemPerPage = 5;
    this.page = 0 ;
  }

  items(){
    if(this.data && this.data.length){
      const offset =  this.page * this.itemPerPage;
      return this.data.slice(offset, offset + this.itemPerPage);
    }
  }

  ngOnInit() {}

  numberOfPages() {
    if(this.data && this.data.length){
      return Math.ceil(this.data.length / this.itemPerPage);
    }
    return 0;
  }

  prvPage() {
    if (this.page > 0) {
      this.page--;
    }
  }

  nextPage() {
    if (this.page < this.numberOfPages()) {
      this.page++;
    }
  }

  inCart(title) {
    if (this.cartService.cart[title]) {
      return true;
    }
  }

}
