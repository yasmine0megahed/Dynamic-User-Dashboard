import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  listUsers(page: number) {
    return this.http.get(`https://reqres.in/api/users?page=${page}`);
  }

  userShow(userId: any) {
    return this.http.get(`https://reqres.in/api/users/${userId}`);
  }
}
