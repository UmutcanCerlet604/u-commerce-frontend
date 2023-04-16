import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
  
export class ProductService {
  constructor(private router: Router, private http: HttpClient) { }

  addProduct(product: Product) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.post<Product>(environment.SERVER_API_URL + "/addProduct", product, {headers})
  }
  getProducts() {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Product[]>(environment.SERVER_API_URL + "/products", {headers})
  }
  delete(id: number) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Boolean>(environment.SERVER_API_URL + "/deleteProduct/" + id, {headers})
  }
  findByProduct(id: number) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Product>(environment.SERVER_API_URL + "/productDetail/" + id, {headers})
  }
}
