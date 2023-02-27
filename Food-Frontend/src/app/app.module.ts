import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Mycomponents/header/header.component';

import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';
import { Router } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Mycomponents/login/login.component';
import { SignupComponent } from './Mycomponents/signup/signup.component';
import { PayComponent } from './pages/pay/pay.component';
import { SuccessComponent } from './pages/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    HomeComponent,
     FoodDetailComponent,
     CartComponent,
     SearchComponent,
     AdminComponent,
     LoginComponent,
     SignupComponent,
     PayComponent,
     SuccessComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
