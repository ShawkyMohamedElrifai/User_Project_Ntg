import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
 
 
  getAllData(){
    return this.http.get('https://fakestoreapi.com/products')
  }
  
  getAllCategories(){
     return this.http.get('https://fakestoreapi.com/products/categories')
  }
   getproductById(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id )
  
   }
  
  getproductByCategory(keyword:string){
    return this.http.get('https://fakestoreapi.com/products/category/'+ keyword )
  }
  
  }   