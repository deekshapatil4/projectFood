import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Mycomponents/login/login.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { AdminComponent } from './pages/admin/admin.component';
import { CartComponent } from './pages/cart/cart.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { PayComponent } from './pages/pay/pay.component';

import { SearchComponent } from './pages/search/search.component';
import { SuccessComponent } from './pages/success/success.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'food/:id' ,component:FoodDetailComponent},
  {path:'cart-page' ,component:CartComponent},
  {path:'search/:searchTerm',component:SearchComponent},
  {path:'admin',component:AdminComponent},
  {path:'pay',component:PayComponent},
  {path:'success',component:SuccessComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
