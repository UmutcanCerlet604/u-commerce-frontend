import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private router: Router, private http: HttpClient) { }

  addCategory(category: Category) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')!})
    return this.http.post<Category>(environment.SERVER_API_URL + "/addCategory", category, {headers})
  }

  getCategories() {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')!})
    return this.http.get<Category[]>(environment.SERVER_API_URL + "/categories", {headers})
  }

  delete(id: number) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')!})
    return this.http.get<Boolean>(environment.SERVER_API_URL + "/deleteCategory/" + id, {headers})
  }


}
