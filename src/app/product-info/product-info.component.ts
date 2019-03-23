import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from './../data-service';
import {CartService} from './../cart.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  item: object;

  constructor(private route: ActivatedRoute,
    private dataService: DataService, private cartService: CartService) {

    this.onProductAdd = this.onProductAdd.bind(this);
  }

  ngOnInit() {
    const itemTitle = this.route.params['value']['itemTitle'];
    this.item = this.dataService.findItemByTitle(itemTitle);
  }

  onProductAdd(item){
    this.cartService.onProductAdd(item);
  }

}
