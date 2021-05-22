import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './components/table/table.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './components/product-list/product-list.component';



@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, ProductDashboardComponent, ProductListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    MaterialModule
  ]
})
export class AdminModule { }
