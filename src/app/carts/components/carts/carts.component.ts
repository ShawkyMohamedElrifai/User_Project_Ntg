import { Component ,OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit  {
 constructor ( private service:CartsService){ }
 cartProducts:any []=[]
 total:any =0
 success:boolean =false
 ngOnInit(): void {
   this.getCartProducts()
 }

 getCartProducts(){
   if("cart" in localStorage){
    this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
   }
 }

 

addAmount(index:number){
  this.cartProducts[index].quantity++
  this.getcartTotal()
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
}

detectChange(){
  this.getcartTotal()
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
}

deleteProduct(index:number){
  this.cartProducts.splice(index ,1)
  this.getcartTotal()
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
}

cleareCart(){
  this.cartProducts = []
  this.getcartTotal()
  
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
}
getcartTotal(){
  this.total = 0
  for(let x in this.cartProducts){
    this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
  }
}


minsAmount(index:number){
  this.cartProducts[index].quantity--
  this.getcartTotal()
  localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))

}
 addCart(){
  let products = this.cartProducts.map((item:any) => {
    return {productId:item.id ,quantity:item.quantity}
  })
   let Model = {
    userId:5,
      date:new Date(),
      products:products 

   }
    this.service.craeteNewcart(Model).subscribe(res =>{
       this.success = true
    })
   console.log(products)
 }
}