import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient)
  private _urlBase: string = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Product[]>{
    return this._http.get<Product[]>(this._urlBase);
  }
  getProduct(id: number): Observable<Product>{
    return this._http.get<Product>(`${this._urlBase}/${id}`);
  }
}
