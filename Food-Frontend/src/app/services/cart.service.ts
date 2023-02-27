import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Cart } from 'src/shared/Cart';
import { CartItem } from 'src/shared/Cartitem';
import { Food } from 'src/shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();
  private cartSubject:BehaviorSubject<Cart>=new BehaviorSubject(this.cart)
  constructor() { }
  //Add to cart
  addToCart(food:Food):void{
    let cartItem=this.cart.items.find(item=>item.food.id===food.id)
    if(cartItem)
    return;

   this.cart.items.push(new CartItem(food));
   this.setCartToLocalStorage();
    }
    //Remove from add TO Cart
    removeFromCart(foodId:string):void{
      this.cart.items=this.cart.items.filter(item=>item.food.id !=foodId);
      this.setCartToLocalStorage();

    }
    //change quantity
    changeQuantity(foodId:string ,quantity:number){
      let cartItem=this.cart.items.find(item=>item.food.id===foodId);
      if(!cartItem)
      return;
      cartItem.quantity=quantity;
      cartItem.price=quantity*cartItem.food.fprice;
      this.setCartToLocalStorage()
    }
    //clear Cart
    clearCart(){
      this.cart=new Cart();
      this.setCartToLocalStorage()
    }
    //store cart details
    getCartObservable():Observable<Cart>{
      return this.cartSubject.asObservable();

    }
    //set local storage
    private setCartToLocalStorage():void{
      this.cart.totalPrice=this.cart.items.reduce((prevSum,currentItem)=>
      prevSum+currentItem.price,0);
      this.cart.totalCount=this.cart.items.reduce((prevSum,currentItem)=>
      prevSum + currentItem.quantity,0)
       const cartJson=JSON.stringify(this.cart);
       localStorage.setItem('Cart',cartJson);
       this.cartSubject.next(this.cart);
    }
  //get the cart details from local Storage
  private getCartItemFromLocalStroage():Cart{
    const cartJson=localStorage.getItem('Cart');
    return cartJson?JSON.parse(cartJson):new Cart();

  }
}
