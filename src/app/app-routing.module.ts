import { WearableComponent } from './product/wearable/wearable.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { DesktopComponent } from './product/desktop/desktop.component';
import { Error404Component } from './error404/error404.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'signup',component:SignupComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'product',children:[
    {path:'',component:ProductComponent},
    {path:'desktop',component:DesktopComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'mobile',component:MobileComponent},
    {path:'wearable',component:WearableComponent}
  ]},
  {path:'**',component:Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
