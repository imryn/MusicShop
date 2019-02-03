import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {ITEMS} from "./../items";

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  item: object;

  constructor(private route: ActivatedRoute) {
   
  }


  findItemInItems(title){
    for(let item of ITEMS){
      if(item.title == title){
        return item;
      }
    }
  }

  ngOnInit() {
    const itemTitle = this.route.params['value']['itemTitle'];
    this.item = this.findItemInItems(itemTitle);


  }

 

}
