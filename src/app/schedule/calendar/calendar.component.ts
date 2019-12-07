import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AppService } from "src/app/app.service";
import { map } from "rxjs/operators";

@Component({
  selector: "fm-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.scss"]
})
export class CalendarComponent implements OnInit {
  constructor(private appService: AppService) {}

  calendarItems = [];

  calendarPlugins = [dayGridPlugin];

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.appService
      .getActivities()
      .pipe(map((x: any[]) =>
          x.map(a => {
            return {
              title: "(".concat(a.time.hour).concat(":").concat(a.time.minute).concat(") ").concat(a.name),
              date: this.getDate(a.date)
            };
          })
        )
      )
      .subscribe(activities => {
        this.calendarItems = activities;
      });
  }

  getDate(date) {
    const yyyy = date.year;
    const mm = date.month < 9 ? "0" + (date.month + 1) : date.month;
    const dd = date.day < 10 ? "0" + date.day : date.day;
    return ""
      .concat(yyyy)
      .concat("-")
      .concat(mm)
      .concat("-")
      .concat(dd);
  }
}
