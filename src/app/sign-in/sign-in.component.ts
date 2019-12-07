import { Component, OnInit, ViewChild } from "@angular/core";
import { AuthService } from "../auth.service";
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: "fm-sign-in-component",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  animations: [
    trigger('background', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class SignInComponent implements OnInit {
  model: any = {};
  @ViewChild("username1", {static: true}) username1;
  @ViewChild("userpassword1", {static: true}) userpassword1;
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  onSubmit() {
   this.authService.register(this.model.email, this.model.password);
  }

  login() {
    this.authService.signIn(this.username1.nativeElement.value, this.userpassword1.nativeElement.value);
  }
  
}
