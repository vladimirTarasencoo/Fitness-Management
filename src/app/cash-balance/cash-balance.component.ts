import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'fm-cash-balance',
  templateUrl: './cash-balance.component.html',
  styleUrls: ['./cash-balance.component.scss'],
  animations: [
    trigger('background', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
    ])
  ]
})


export class CashBalanceComponent implements OnInit {

  user: any
  email: any
  balance: any
  phone: any
  expirationDate: any

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = "Maurizio Franchesco De Servantez"
    this.email = "makeUkraneGreatAgain@umail.com"
    this.balance = "1000"
    this.phone = "+7 324 522 57 34"

    var d = new Date();
    this.expirationDate = d.getFullYear() + "." + d.getMonth() + "." + d.getDate(); 
  }

}
