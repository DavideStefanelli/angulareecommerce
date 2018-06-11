import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http : HttpClient) { 

  }

  getShopProducts(shopId : number) : Observable<Product[]> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.get<Product[]>('http://127.0.0.1:8080/shop/' + shopId + '/products', { headers });
  }
  
}
