import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { Product1Component } from '../products/components/product1/product1.component';
import { ProductsModule } from '../products/products.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  
   
  ],
  exports:[
    HeaderComponent,
    SelectComponent,
    FormsModule,
  
  ]
})
export class SharedModule { }
