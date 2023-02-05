import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CompanyComponent } from './company/company.component';
import { TaskComponent } from './task/task.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { EntriesComponent } from './entries/entries.component';
import { ProfileComponent } from './profile/profile.component';
import { TheType } from './the-type/the-type';
import { TheTypeIiComponent } from './the-type-ii/the-type-ii.component';
import { TheTypeIiiMaria } from './the-type-iii/the-type-iii.maria';


@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ShoppingComponent,
    CompanyComponent,
    TaskComponent,
    ConfigurationComponent,
    EntriesComponent,
    ProfileComponent,
    TheType,
    TheTypeIiComponent,
    TheTypeIiiMaria
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    EntriesComponent,
    ProfileComponent
  ]
})
export class HomeModule { }
