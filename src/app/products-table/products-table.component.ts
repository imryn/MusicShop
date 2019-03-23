import { Component, OnInit , Input } from '@angular/core';
import {CartService} from './../cart.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Input() onAdd: Function;
  @Input() onRemove: Function;
  @Input() public data: [];

  itemPerPage: number;
  page: number;

  constructor(private cartService: CartService) {
    this.itemPerPage = 5;
    this.page = 0 ;
  }

  items() {
    const offset =  this.page * this.itemPerPage;
    return this.data.slice(offset, offset + this.itemPerPage);
  }

  ngOnInit() {}

  numberOfPages() {
    return Math.ceil(this.data.length / this.itemPerPage);
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
