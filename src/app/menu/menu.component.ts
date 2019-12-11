import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";

@Component({
  selector: "fm-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  user: any
  isAdmin:boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.isAdmin = this.user.email.includes('admin');
  }

  logout() {
    this.authService.signOut();
    localStorage.clear();
  }
}
