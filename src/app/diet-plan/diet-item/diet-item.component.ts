import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fm-diet-item',
  templateUrl: './diet-item.component.html',
  styleUrls: ['./diet-item.component.scss']
})
export class DietItemComponent implements OnInit {
@Input() diets: any;
@Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
