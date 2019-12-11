import { IndividualPlan } from "./../models/IndividualPlan";
import { Activity } from "./../models/activity";
import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from "@angular/animations";
import { AppService } from "../app.service";
import { map } from "rxjs/operators";
import { User } from '../models/user';

@Component({
  selector: "fm-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
  animations: [
    trigger("background", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class UserProfileComponent implements OnInit {
test = "";
activities = [];
balance;
user;
isAdmin;
users = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getUserBalances().subscribe(data => this.balance = data);
    this.user = JSON.parse(localStorage.getItem("user"));
    this.isAdmin = this.user.email.includes('admin');
    this.appService
      .getActivities()
      .pipe(map((x: any[]) => x
          .filter(act => act.userId === this.user.uid)
        )
      )
      .subscribe(activities => {
        this.activities = activities;
      });

      this.appService
      .getUsers()
      .subscribe(
        users =>
          (this.users = users.filter((x: User) => !x.email.includes("admin")))
      );
  }

  submit() {

  }

}
