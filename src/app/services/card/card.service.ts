import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../../model/card';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  addCard(card: Card) {
    const headers: HttpHeaders = new HttpHeaders({ Authorization: localStorage.getItem('usertoken')! })
    return this.http.post<Card>(environment.SERVER_API_URL + "/addCard", card , {headers})
  }
}
