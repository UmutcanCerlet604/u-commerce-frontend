import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';
import { Brand } from 'src/app/model/brand';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  constructor(private router: Router, private http: HttpClient) { }

  addBrand(brand: Brand) {
    console.log(brand);
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')!})
    return this.http.post<Brand>(environment.SERVER_API_URL + "/addBrand",brand, {headers} )
  }

  getBrands() {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')!})
    return this.http.get<Brand[]>(environment.SERVER_API_URL + "/brands", {headers} )
  }

  delete(id: number) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.get<Boolean>(environment.SERVER_API_URL + "/deleteBrand/" + id, {headers})
  }


}
