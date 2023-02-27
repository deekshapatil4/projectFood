import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/model/Food';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {
Id:string|null|undefined;
fooddetails!:Food;
food!:Food;
 constructor(private service:FoodService,private readonly route:ActivatedRoute,private cart:CartService,private router:Router){}
 ngOnInit(): void {
  this.route.paramMap.subscribe(
   (params)=>{this.Id=params.get('id');
   if(this.Id){
    this.service.getFoodById(this.Id).subscribe(
    (fooddata)=>{
       this.fooddetails=fooddata
      return this.fooddetails

    });

   }
  }
  );
 }
  //add to cart
  addToCart(){
    this.cart.addToCart(this.fooddetails);
    this.router.navigateByUrl('/cart-page')
   }
}
