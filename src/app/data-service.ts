import { Injectable } from '@angular/core';
import {ITEMS} from './items';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {

  }

  findItemByTitle(title){
    for(let item of ITEMS){
      if(item.title.includes(title)) {
        return item;
      }
    }
  }


  searchByTitle(searchWord){
    const regex = new RegExp(searchWord, 'i');
    return ITEMS.filter(item => {
      return regex.test(item.title);
    });
  }


}
