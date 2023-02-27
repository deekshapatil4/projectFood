import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/shared/model/Food';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formValue !:FormGroup;
  foodModelobj:Food=new Food();
 fooddata!:any;
  showAdd!:boolean;
  showUpdate!:boolean;
  constructor(private formbuilder:FormBuilder, private api:FoodService){}
  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      fname:[''],
      fimage:[''],
      fprice:[''],
      star:[''],
      favorite:[''],
      cookTime:['']
    })
    this.getFoodDetails();
  }
  clickAddFood(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  //posting Food Details
  postFoodDetails(){
    this.foodModelobj.fname=this.formValue.value.fname;
    this.foodModelobj.fimage=this.formValue.value.fimage;
    this.foodModelobj.fprice=this.formValue.value.fprice;
    this.foodModelobj.star=this.formValue.value.star;
    this.foodModelobj.favorite=this.formValue.value.favorite;
    this.foodModelobj.cookTime=this.formValue.value.cookTime;

     this.api.postFood(this.foodModelobj)
     .subscribe(res=>{
      console.log(res);
      alert("food has been added")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getFoodDetails();
     },
     err=>{
      alert("something is wrong");
     })
  }
  getFoodDetails(){
    this.api.getFood()
    .subscribe(res=>{
      this.fooddata=res;
    })

  }
  deleteFood(row:any){
    this.api.deleteFood(row.id).subscribe();
   
     alert("Movie has been deleted ")

 this.getFoodDetails();
  }

onedit(row:any){
  this.showAdd=false;
  this.showUpdate=true;
  this.foodModelobj.id=row.id;
  this.formValue.controls['fname'].setValue(row.fname);
  this.formValue.controls['fimage'].setValue(row.fimage);
  this.formValue.controls['fprice'].setValue(row.fprice);
  this.formValue.controls['star'].setValue(row.star);
  this.formValue.controls['favorite'].setValue(row.favorite);
  this.formValue.controls['cookTime'].setValue(row.cookTime);
}
updateFoodDetails(){
  this.foodModelobj.fname=this.formValue.value.fname;
  this.foodModelobj.fimage=this.formValue.value.fimage;
  this.foodModelobj.fprice=this.formValue.value.price;
  this.foodModelobj.star=this.formValue.value.star;
  this.foodModelobj.favorite=this.formValue.value.favorite;
  this.foodModelobj.cookTime=this.formValue.value.cookTime;
  this.api.updateFood(this.foodModelobj,this.foodModelobj.id)
  .subscribe(res=>{
    alert("updated successfully");
    let ref=document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getFoodDetails();
  })


}

}
