import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products : Product[]= [];
  private cart = new BehaviorSubject<Product[]>([]);
  public cart$ = this.cart.asObservable() 
  constructor() { }

  public addCart(product: Product){
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }

  public deleteProduct(id: string){
    this.products = this.products.filter(product=> product.id !== id)
    this.cart.next(this.products);
  }
}
