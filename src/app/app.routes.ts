import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {OrderComponent} from "./order/order.component";
import {CustomerComponent} from "./customer/customer.component";

export const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'customer',component:CustomerComponent},
  {path:'about',component:AboutComponent},
  {path:'order',component:OrderComponent},
];
