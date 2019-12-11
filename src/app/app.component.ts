import { Router } from '@angular/router';
import { Component } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { AuthService } from "../app/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "FitnessManagement";
  constructor(private authService: AuthService, router: Router) {
    if(authService.isLoggedIn) router.navigate(["home"])
  }

  calendarPlugins = [dayGridPlugin];
}
