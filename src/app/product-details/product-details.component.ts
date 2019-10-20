import { Component, OnInit } from '@angular/core';

// Import Lib
import { ActivatedRoute } from '@angular/router';

// Import Model
import { products } from '../products';

// Import Service
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

// Var the object product
product;

  constructor(
    // Init ActivatedRoute
    private route: ActivatedRoute,
    // Calling Service
    private cartService: CartService
  ) { }

  // Init
  ngOnInit() {
    // Call Data 
      this.route.paramMap.subscribe(params => {
        // CAll Get (productId)
    this.product = products[+params.get('productId')];
  });
  }

  // Methods
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

}