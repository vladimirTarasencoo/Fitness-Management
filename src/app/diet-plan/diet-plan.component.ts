import { AppService } from "./../app.service";
import { Component, OnInit } from "@angular/core";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "fm-diet-plan",
  templateUrl: "./diet-plan.component.html",
  styleUrls: ["./diet-plan.component.scss"],
  animations: [
    trigger("background", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("1s", style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class DietPlanComponent implements OnInit {
diets: any;
  constructor(private appService: AppService) {
    appService.getUserDiets().subscribe((data: any) => this.diets = data.diets);
   }

  ngOnInit() {
  }

}
