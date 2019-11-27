import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ScheduleComponent, 
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FullCalendarModule,
    NgbModule,
    FormsModule,
  ],
  exports: [
    ScheduleComponent  
  ]
})
export class ScheduleModule { }
