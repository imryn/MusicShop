import { Component, OnInit } from '@angular/core';
import {ITEMS} from './../items';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  searchValue: string;
  cart: object;

  constructor() { 
    this.cart = {};
    this.onProductAdd = this.onProductAdd.bind(this);
    this.onProductRemove = this.onProductRemove.bind(this);
  }

  ngOnInit() {

  }

  onSubmit() {
    if(this.searchValue) {
      
    }
  }

  onProductAdd(item){
    if(this.cart[item.title]){
       this.cart[item.title]++;
    }
    else {
      this.cart[item.title]= 1;
    }

    this.cart[item.title] = this.cart[item.title] ? this.cart[item.title]++ : 1;
  }

  onProductRemove(item){
    if(this.cart[item.title]) {
      this.cart[item.title]--;
      if(this.cart[item.title] == 0){
         delete this.cart[item.title];
      }
    }
  }

  totalCalc(){
    const totalCart = Object.values(this.cart).reduce((sum,value)=>sum+value,0);
    return totalCart;
  }

  findItemByTitle(title){
    for(let i=0; i<ITEMS.length; i++) {
      if(ITEMS[i].title = title){
        return ITEMS[i];
      }
    }
  }

  totalCost(){
    let sum = 0 ;
    for(let title in this.cart){
        const item = this.findItemByTitle(title);
        sum = sum + item.cost * this.cart[title];
    }
    return sum;
  }

}
