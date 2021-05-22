import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public displayedColumns = ['id', 'title', 'price', 'description', 'actions'];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  private fetchProducts(){
    this.productsService.getAllProducts().subscribe(products=>{
      this.products = products
      console.log(products)
    })
  }

  public deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(res=>{
      console.log(res)
    })
  }

}
