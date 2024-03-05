import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {OrderComponent} from "./order/order.component";
import {CustomerComponent} from "./customer/customer.component";
import {NotFoundPageComponent} from "./shared/not-found-page/not-found-page.component";
import {SaveComponent} from "./order/inner-item/save/save.component";
import {GetComponent} from "./order/inner-item/get/get.component";
import {DeleteComponent} from "./order/inner-item/delete/delete.component";

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'customer/:data',component:CustomerComponent},
  {path:'about',component:AboutComponent},
  {path:'order',component:OrderComponent,children:[
  {path:'',redirectTo:'/order/save',pathMatch:'full'},
  {path:'save',component:SaveComponent},
  {path:'get',component:GetComponent},
  {path:'delete',component:DeleteComponent},
]},
  {path:'**',component:NotFoundPageComponent},
];
