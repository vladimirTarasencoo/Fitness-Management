import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    ScheduleComponent, 
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FullCalendarModule,
  ],
  exports: [
    ScheduleComponent  
  ]
})
export class ScheduleModule { }
