import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietPlanRoutingModule } from './diet-plan-routing.module';
import { DietPlanComponent } from './diet-plan.component';
import { DietItemComponent } from './diet-item/diet-item.component';


@NgModule({
  declarations: [
    DietPlanComponent, 
    DietItemComponent
  ],
  imports: [
    CommonModule,
    DietPlanRoutingModule
  ]
})
export class DietPlanModule { }
