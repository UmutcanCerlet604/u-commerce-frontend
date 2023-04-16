import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Basket } from 'src/app/model/basket';
import { environment } from '../../../environments/environment';
import { User } from 'src/app/model/model';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor(private http: HttpClient) { }

  addToBasket(basket: Basket) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.post<Basket>(environment.SERVER_API_URL + "/addToBasket", basket, {headers})
  }

  getAllBasket(user: User) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Basket[]>(environment.SERVER_API_URL + "/basketGetAll/"+ user.id, {headers})
  }

  deleteBasket(id: Number) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Boolean>(environment.SERVER_API_URL+"/deleteBasket/"+ id, {headers})
  }

  increase(id: Number) {
    console.log(id);
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Basket[]>(environment.SERVER_API_URL+"/increase/"+ id, {headers})
  }

  decrease(id: Number) {
    console.log(id);
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Basket[]>(environment.SERVER_API_URL+"/decrease/"+ id, {headers})
  }

}
