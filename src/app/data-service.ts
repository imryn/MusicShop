import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private userService: UserService) {
  }

  findItemByTitle(title) {
    const items = this.userService.getItems();
    for (const item of items) {
      if (item.title.includes(title)) {
        return item;
      }
    }
  }


  searchByTitle(searchWord) {
    const items = this.userService.getItems();
    const regex = new RegExp(searchWord, 'i');
    return items.filter(item => regex.test(item.title));
  }


}
