import { Component, OnInit , Input } from '@angular/core';
import {ITEMS} from './../items';
import {CartService} from './../cart.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {

  @Input()
  public onAdd: Function; 

  @Input()
  public onRemove: Function;

  itemPerPage: number;
  page: number;
  items: object;

  constructor(private cartService: CartService) {
    this.itemPerPage = 5;
    this.page = 0 ;
  }

  updateView(){
    const offset =  this.page * this.itemPerPage;
    this.items = ITEMS.slice(offset, offset + this.itemPerPage);
  }

  ngOnInit() {
      this.updateView();
  }

  numberOfPages() {
    return Math.ceil(ITEMS.length / this.itemPerPage);
  }

  prvPage() {
    if (this.page > 0) {
      this.page--;
      this.updateView();
    }
  }

  nextPage() {
    if (this.page < this.numberOfPages()) {
      this.page++;
      this.updateView();
    }
  }

  inCart(title) {
    if (this.cartService.cart[title]) {
      return true;
    }
  }


}
