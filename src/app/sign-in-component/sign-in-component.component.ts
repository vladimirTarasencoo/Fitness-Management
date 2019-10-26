import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in-component',
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signInForm = this.fb.group({
      login: '',
      password: ''
    })
  }

  signIn(){
    console.log("boom!");
  }

}
