import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/shared/Cart';
import { CartItem } from 'src/shared/Cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cart!:Cart;
  constructor(private cartservice:CartService){
    this.cartservice.getCartObservable()
      .subscribe((cart) => {this.cart = cart;})

   }
  ngOnInit(): void {}
  removeFromCart(cartItem:CartItem){
   this.cartservice.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartservice.changeQuantity(cartItem.food.id,quantity);
  }
}
