import { Component, OnInit } from '@angular/core';
// Add Service
import { CartService } from '../cart.service';
// Add Form
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Init property 
  items;
  // Forms Property
  checkoutForm;

  constructor (
    // Call/Init Global service 
    private cartService: CartService,
    // Init/Global Form
    private formBuilder: FormBuilder,
  ) {
    // Init Properties
    this.items = this.cartService.getItems();
    // Init Form
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  // Init process
  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  // Submit Form
   onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }



}