import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDetail } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }
  
  getProductDetail(id : number) : Observable<ProductDetail> {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.get<ProductDetail>('http://127.0.0.1:8080/product/' + id + '/detail', { headers });
  }

}
