import { Component, OnInit } from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid"


@Component({
  selector: 'fm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calendarPlugins = [dayGridPlugin];
}
