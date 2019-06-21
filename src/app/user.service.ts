import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './user';
import { Item } from './my-cart/typing';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:51021/api';
  items: Item[] = [];

  constructor(private http: HttpClient) {
    this.getItemsData();
  }

  getItemsData() {
    return this.http.get<Item[]>(this.url + '/AllItemsDetails')
      .toPromise().then(data => {
        this.items = data;
        return this.items;
      });
  }

  createUser(user: Users): Observable<Users> {
    const httpOption = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Users>(this.url + '/InsertUserDetails/', user, httpOption);
  }

  getItems(): Item[] {
    return this.items;
  }
}
