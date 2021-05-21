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
  today = new Date()
  constructor(private productServices: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }
  public productClicked(id: number){
    console.log("app padre", id)
  }

  private fetchProducts(){
    this.productServices.getAllProducts().subscribe((products)=>{
      this.myProducts = products
      console.log(products)
    })
  }


}
