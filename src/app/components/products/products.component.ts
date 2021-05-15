import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myProducts  : Product[];
  today= new Date()
  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {
    this.myProducts = this.productServices.getAllProducts(); 
  }
  public productClicked(id: number){
    console.log("app padre", id)
  }


}
