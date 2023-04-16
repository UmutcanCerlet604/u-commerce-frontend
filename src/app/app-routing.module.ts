import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { RegisterComponent } from './user/register/register.component';
import { ProductlistComponent } from './admin/productlist/productlist.component';
import { CategorylistComponent } from './admin/categorylist/categorylist.component';
import { AddbrandComponent } from './admin/addbrand/addbrand.component';
import { HomeComponent } from './user/home/home.component';
import { BasketComponent } from './user/basket/basket.component';
import { PastorderComponent } from './user/pastorder/pastorder.component';
import { ProductdetailComponent } from './user/productdetail/productdetail.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "", component: MainComponent, children: [
      { path: "addproduct", component: AddproductComponent },
      { path: "productlist", component: ProductlistComponent },
      { path: "categorylist", component: CategorylistComponent },
      { path: "addbrand", component: AddbrandComponent },
      { path: "home", component: HomeComponent },
      { path: "basket", component: BasketComponent },
      { path: "pastorder", component: PastorderComponent },
      { path: "productdetail/:id", component: ProductdetailComponent },
      { path: "adminhome", component: AdminhomeComponent },
      
    ]
  },
  { path: "register", component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
