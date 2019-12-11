import { Diet } from "./../models/diet";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { AppService } from "../app.service";
import { User } from '../models/user';

@Component({
  selector: "fm-cash-balance",
  templateUrl: "./cash-balance.component.html",
  styleUrls: ["./cash-balance.component.scss"],
  animations: [
    trigger("background", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 }))
      ])
    ])
  ]
})
export class CashBalanceComponent implements OnInit {
  // user: any
  // email: any
  // balance: any
  // phone: any
  // expirationDate: any
  users: any[];

  constructor(
    private authService: AuthService,
    private appService: AppService
  ) {}

  ngOnInit() {
    this.appService
      .getUsers()
      .subscribe(
        users =>
          (this.users = users.filter((x: User) => !x.email.includes("admin")))
      );
    // this.user = "Maurizio Franchesco De Servantez"
    // this.email = "makeUkraneGreatAgain@umail.com"
    // this.balance = "1000"
    // this.phone = "+7 324 522 57 34"

    // var d = new Date();
    // this.expirationDate = d.getFullYear() + "." + d.getMonth() + "." + d.getDate();
  }

  createDiet(value) {
    const diet = new Diet();
    diet.Breakfast = [value.breakfast];
    diet.Lunch = [value.lunch];
    diet.Dinner = [value.dinner];
    const obj = { ...diet, userId: value.user.uid };
    this.appService.createDiet(obj);
  }
}
