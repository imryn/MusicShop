import { Component, OnInit } from '@angular/core';
import {CartService} from "./../cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  searchValue: string;

  constructor(private cartService:CartService) { 
    
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
    this.cartService.onProductAdd(item);
  }

  onProductRemove(item){
    this.cartService.onProductRemove(item);
  }

}
