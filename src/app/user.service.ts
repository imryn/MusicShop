import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Users } from './user';
import {  Item } from './item';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:51021/api';

  constructor(private http: HttpClient) { }

  createUser(user: Users): Observable<Users> {
    const httpOption = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Users>(this.url + '/InsertUserDetails/', user, httpOption);
  }

  getItems() : Observable<Item[]> {
    return this.http.get<Item[]>(this.url + '/AllItemsDetails');
  }
}
