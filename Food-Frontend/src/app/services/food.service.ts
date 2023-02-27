import { Injectable } from '@angular/core';
import { Food } from 'src/shared/model/Food';
import { HttpClient, } from '@angular/common/http';
import { Observable ,filter, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService  {


    constructor(private http:HttpClient) { }

      //get all food items
      public getAllFoods(){
      return this.http.get("http://localhost:8080/food/all");
      }

      //get food by id
      public getFoodById(id:string):Observable<any>{
        return this.http.get("http://localhost:8080/food/"+id);
      }
      //search by food
      public getAllFoodBySearchTerm(searchTerm:string):Observable<any>{
 return this.http.get<any>("http://localhost:8080/food/search/"+searchTerm).pipe(filter((food:any)=>food.fname.toLowerCase().includes(searchTerm.toLowerCase())));

      }

      // post new food
   public postFood(data:any){
    return this.http.post<any>("http://localhost:8080/food/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  //getFoodfor admin
  getFood(){
    return this.http.get<any>("http://localhost:8080/food/all")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
   //updateFood
   public updateFood(data:any ,id:string){
    return this.http.put<any>("http://localhost:8080/food/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
   }

   //delete Movie with Id
   public deleteFood(id:string){
     return this.http.delete("http://localhost:8080/food/"+id)
    // .pipe(map((res:any)=>{
    //    return res;
    // }))
   }

}
