import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "fm-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"]
})
export class ActivityComponent implements OnInit {

  constructor(private ar: ActivatedRoute) {
    ar.params.subscribe(param => console.log(param));
   }

  ngOnInit() {
  }

}
