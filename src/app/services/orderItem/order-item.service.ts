import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderItem } from '../../model/orderItem';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  constructor(private http: HttpClient) { }

  addOrderItem(orderItem: OrderItem) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<OrderItem>(environment.SERVER_API_URL + "/addOrderItem", {headers})
  }

}
