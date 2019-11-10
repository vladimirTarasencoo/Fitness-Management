import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashBalanceComponent } from './cash-balance.component';


const routes: Routes = [
  { path: 'cash-balance', component: CashBalanceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashBalanceRoutingModule { }
