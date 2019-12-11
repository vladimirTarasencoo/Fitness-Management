import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Activity } from '../models/activity';
import { IndividualPlan } from '../models/IndividualPlan';
import { AppService } from '../app.service';

@Component({
  selector: 'fm-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  animations: [
    trigger('background', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class ScheduleComponent implements OnInit {
  activityName = "";
  dp = "";
  time = {hour: 13, minute: 30};
  trainee = "";
  activityDescription = "";
  activities = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUsers().subscribe(x => this.activities = x);
  }

  submit() {
    const act = new Activity();
    act.name = this.activityName;
    act.date = this.dp;
    act.time = this.time;
    act.trainee = this.trainee;
    act.activityDescription = this.activityDescription;
    this.appService.createActivity(act);

    const plan = new IndividualPlan();
    plan.description = "Default description";
    plan.activites = this.activities;
    this.appService.createIndividualPlan(plan);

    this.activityName = "";
    this.activityDescription = "";
    this.trainee = "";
    this.dp = "";
  }

}
