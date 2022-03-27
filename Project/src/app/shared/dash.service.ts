import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { environment } from '../../environments/environment';
import { Dash } from './dash.model';
import { map } from 'rxjs';
import { Item } from './order.model';
import { Use } from './dash.model';
import { Prod } from './dash.model';
@Injectable({
  providedIn: 'root'
})
export class DashService {
  selectedDash: Dash = {
    total: null,
    _id: '',
    items: [],
    userId: [],
    createdAt: '',
    updatedAt: '',
    __v: 0
  };
  
  Dash: any= [];

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  getOrdersList() {
    return this.http.get(environment.apiBaseUrl+'/order');
  }
}
