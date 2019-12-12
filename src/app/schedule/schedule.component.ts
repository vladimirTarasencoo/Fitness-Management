import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";
import { Activity } from "../models/activity";
import { IndividualPlan } from "../models/IndividualPlan";
import { AppService } from "../app.service";

@Component({
  selector: "fm-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"],
  animations: [
    trigger("background", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ScheduleComponent implements OnInit {
  activityName = "";
  dp = "";
  time = { hour: 13, minute: 30 };
  trainee = "";
  activityDescription = "";
  activities = [];
  balance: any;
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getUsers().subscribe(x => (this.activities = x));
    this.appService.getUserBalances().subscribe(data => (this.balance = data));
  }

  submit() {
    const act = new Activity();
    act.name = this.activityName;
    act.date = this.dp;
    act.time = this.time;
    act.trainee = this.trainee;
    act.activityDescription = this.activityDescription;
    act.userId = JSON.parse(localStorage.getItem("user")).uid;
    this.appService.getBalanceSnapshots().subscribe(data => {
      const account = data.filter(
        (x: any) => x._document.proto.fields.userId.stringValue === act.userId
      );
      if (this.balance.accountBalance < 10) {
        alert("Sorry, You don't have enough funds to add an activity");
        return;
      }
      if(Object.values(act).some(x=>!x)) {
        alert("Please fill all fields");
        return;
      }
      const obj = {
        accountBalance:
          this.balance.accountBalance - 10 >= 0
            ? this.balance.accountBalance - 10
            : 0,
        userId: this.balance.userId,
        userName: this.balance.userName
      };
      this.appService.updateBalance(obj, account[0].id);
      this.appService.createActivity(act);
      alert("Activity successfully added!")
    });

    const plan = new IndividualPlan();
    plan.description = "Default description";
    plan.activites = this.activities;
    this.appService.createIndividualPlan(plan);

    this.activityName = "";
    this.activityDescription = "";
    this.trainee = "";
    this.dp = "";
  }

  addFunds(){
    this.appService.getBalanceSnapshots().subscribe(data => {
      const account = data.filter(
        (x: any) => x._document.proto.fields.userId.stringValue === JSON.parse(localStorage.getItem("user")).uid
      );
      const obj = {
        accountBalance:
          this.balance.accountBalance + 10,
        userId: this.balance.userId,
        userName: this.balance.userName
      };
      this.appService.updateBalance(obj, account[0].id);
    });
  }
}
