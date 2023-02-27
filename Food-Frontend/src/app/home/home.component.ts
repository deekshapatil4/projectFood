import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/shared/model/Food';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  foodlist!:Food[];
  food: any;
  // food :Food[]=[];
 constructor( private service:FoodService,activatedroute:ActivatedRoute){
  activatedroute.params.subscribe((params)=>{
    if(params.searchTerm)
   this.food=this.service.getAllFoodBySearchTerm(params.searchTerm)
    else
       this.foodlist;

  });
 }
 ngOnInit(): void {
  this.service.getAllFoods().subscribe((data:any)=>{
    this.foodlist=data;
     return this.foodlist;

  })
 }
 };



