import { Injectable } from '@angular/core';
import { Product } from '../../../interfaces/product';
import {} from '@angular/common/'
import { HttpClient } from '@angular/common/http';
import {environment} from './../../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products : Product[]
  constructor(private http: HttpClient) { }
  getAllProducts(){
    return this.http.get<Product[]>(`${environment.API_URL}/products`);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${environment.API_URL}/products/${id}`)
  }

  createProduct(product: Product){
    return this.http.post(`${environment.API_URL}/products`,product)
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.API_URL}/products/${id}`, changes)
  }
}
