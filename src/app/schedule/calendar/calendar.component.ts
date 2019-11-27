import { Component, OnInit } from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid"
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'fm-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarItems = [];

  bb = [
    { title: 'Training', date: '2019-11-01' },
    { title: 'Competition', date: '2019-11-12' }
  ]
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  async loadData() {
    var items = []
    this.appService.getActivities().subscribe(activities => {
      activities.forEach(activity => {
        var a = {
          title: activity.name,
          date: this.getDate(activity.date)
        }
        items.push(a);
      })
    });
    console.log("items", items);
    return items;
  }

  getDate(date) {
    var yyyy = date.year;
    var mm = date.month < 9 ? "0" + (date.month + 1) : (date.month + 1); 
    var dd = date.day < 10 ? "0" + date.day : date.day;
    return "".concat(yyyy).concat("-").concat(mm).concat("-").concat(dd);
  };

  calendarPlugins = [dayGridPlugin];
}
