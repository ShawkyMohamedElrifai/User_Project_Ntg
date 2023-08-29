import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { isNgTemplate } from '@angular/compiler';


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:any = [] 
  categories: any = []
  cartProducts:any =[]
  constructor(private service:ProductsService){}
  ngOnInit():void{  
    this.getProducts()
    this.getCategories()

}
getProducts() {
  
  this.service.getAllData().subscribe(res => {
  
    this.products = res
    
  }
  )
}
getCategories() {
  
  this.service.getAllCategories().subscribe(res => {
   
    this.categories = res
  
  } )
}
filterCategory(event:any){

  let value = event.target.value;
  (value == "all")? this.getProducts() : this.getProductsCategory(value)
   
 
  
}
getProductsCategory(keyword :string){
  
  this.service.getproductByCategory(keyword).subscribe((res:any)=>{
   
    this.products = res
  })
}
 
reciveCategory(event:any){
 

}
addToCart(event:any){ 
  if("cart" in localStorage){
   this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
    let exist = this.cartProducts.find((item:any) => item.item.id == event.item.id)
      if(exist){
        alert("Product is already in your cart")
      }else
      {
    this.cartProducts.push(event)
    localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))

      }
  }else{
   this.cartProducts.push(event)
     localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
        
  }
}
}

