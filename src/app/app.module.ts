import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';




import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';

import { CartsModule } from './carts/carts.module';
@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ProductsModule,
    CartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
