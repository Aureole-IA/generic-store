import { Component, OnInit } from '@angular/core';
import { Product, products } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myProducts  : Product[] = products;
  today= new Date()
  constructor() { }

  ngOnInit(): void {
  }
  public productClicked(id: number){
    console.log("app padre", id)
  }


}
