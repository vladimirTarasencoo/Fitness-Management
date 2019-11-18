import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashBalanceRoutingModule } from './cash-balance-routing.module';
import { CashBalanceComponent } from './cash-balance.component';


@NgModule({
  declarations: [CashBalanceComponent],
  imports: [
    CommonModule,
    CashBalanceRoutingModule
  ]
})
export class CashBalanceModule { }
