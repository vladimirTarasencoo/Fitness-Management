import { Diet } from "./../models/diet";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { trigger, transition, style, animate } from "@angular/animations";
import { AppService } from "../app.service";
import { User } from "../models/user";
import { SuggestDiets } from "../helpers/diets";

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
export class ManageDietsComponent implements OnInit {
  // user: any
  // email: any
  // balance: any
  // phone: any
  // expirationDate: any
  users: any[];
  diets: SuggestDiets;

  constructor(
    private authService: AuthService,
    private appService: AppService
  ) {
    this.diets = new SuggestDiets();
  }

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
    diet.breakfast = [value.breakfast];
    diet.lunch = [value.lunch];
    diet.dinner = [value.dinner];
    const obj = { diets: {...diet}, userId: value.user.uid };
    this.appService.getDietsSnapshots().subscribe(data => {
      const diet = data.filter((x: any)=>x._document.proto.fields.userId.stringValue === obj.userId);
      this.appService.createDiet(obj, diet[0].id);
    });

    // this.appService.createDiet(obj);
  }
}
