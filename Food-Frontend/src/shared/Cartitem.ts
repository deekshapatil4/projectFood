import { Food } from "./model/Food";

export class CartItem{
  constructor(public food:Food){}
  quantity:number=1;
  price:number=this.food.fprice;
}
