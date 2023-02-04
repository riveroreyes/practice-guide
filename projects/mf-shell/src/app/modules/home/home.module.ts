import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { ConfigurationComponent } from './configuration/configuration.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ShoppingComponent,
    CompanyComponent,
    TaskComponent,
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
