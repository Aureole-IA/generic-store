import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',    
    component: NavComponent,
    children:[
      {
        path:'',
        component: ProductDashboardComponent
      },
      {
        path:'create',
        component: ProductFormComponent
      },
      {
        path: 'productTable',
        component: TableComponent
      }
    ]
    
  },
  {
    path: 'create',
    component: ProductFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
