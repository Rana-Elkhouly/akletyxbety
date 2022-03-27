import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
 checkout = "/assets/Checkout.png";

  constructor() { }

  ngOnInit(): void {
  }

}
