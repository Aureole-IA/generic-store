import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/core/services/products/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product : Product;
  constructor(private route : ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.fetchProduc(params.id)
      
    })
  }

  private fetchProduc(id: string){
    this.productService.getProduct(id).subscribe(product=>{
      this.product = product
    })
  }



}
