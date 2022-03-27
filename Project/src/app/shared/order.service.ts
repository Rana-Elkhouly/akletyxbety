import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from './user.model';
import { Subject, Subscription } from 'rxjs';
import { Item, Order } from './order.model';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  
  Orders: any= [];
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  constructor(private http: HttpClient) { }

  postOrder(){
    let products : Product[]=  JSON.parse(localStorage.getItem('Items'))
    
    let total = 0; 
    let items : Item[] = products.map(product => {
      total += product.qnt * product.price;
      return {
        productId : product._id,
        price: product.price,
        quantity: product.qnt
      }
    })
    let order: Order = {
      items,
      total,
      };
      localStorage.setItem("Items",JSON.stringify([]));
    return this.http.post(environment.apiBaseUrl+'/order', order);
  }
}
