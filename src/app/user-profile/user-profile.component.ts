import { IndividualPlan } from "./../models/IndividualPlan";
import { Activity } from "./../models/activity";
import { Component, OnInit } from "@angular/core";
import { trigger, transition, animate, style } from '@angular/animations';
import { AppService } from "../app.service";

@Component({
  selector: "fm-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
  animations: [
    trigger('background', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class UserProfileComponent implements OnInit {
test = "";
activities = [];
  constructor(private appService: AppService) { }

  ngOnInit() {
    // this.appService.getUsers().subscribe(x => this.activities = x);
    // this.appService.getActivity("ryif4kkkKTsvnkEvjlfh").subscribe(console.log);
  }

  submit() {

  }

}
