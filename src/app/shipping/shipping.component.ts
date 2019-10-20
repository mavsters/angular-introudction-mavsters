import { Component, OnInit } from '@angular/core';
// Add Service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  // Property
  shippingCosts;

  constructor(
    // Call Service Global
    private cartService: CartService
  ) { }

  ngOnInit() {
    // Init Cost by HTTP
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}