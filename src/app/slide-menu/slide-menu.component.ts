import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fm-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss']
})
export class SlideMenuComponent implements OnInit {

username: any

  constructor() { }

  ngOnInit() {
    this.username = "Recardo Milos";
  }

}
