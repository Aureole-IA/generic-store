import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<any[]>;
  constructor(private cartService: CartService) { 
    this.products$ = this.cartService.cart$.pipe(map(products=>{
     return  products.reduce((acc, el)=>{
      let index = acc.findIndex(acc=>acc.id== el.id)
      if (index>-1) {
          acc[index].cantidad += 1;
        }else{
          acc.push({cantidad: 1,...el})
        }
        return acc
      },[])
    }));
  }

  ngOnInit(): void {
  }

  public deleteProduct(id: string){
    this.cartService.deleteProduct(id)
  }

}
