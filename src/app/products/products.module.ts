import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Product1Component } from './components/product1/product1.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    Product1Component
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports:[
   Product1Component,
   ProductsDetailsComponent
  ]
})
export class ProductsModule { }
