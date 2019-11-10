import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
import { MenuComponent } from '../menu/menu.component';


const routes: Routes = [
  { path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
