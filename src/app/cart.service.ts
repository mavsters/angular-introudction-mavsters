import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  // Add Root Data
  providedIn: 'root'
})
export class CartService {

  // Init Variable
  items = [];
  
  constructor(
    private http: HttpClient
  ) {}

  // CRUD Methods
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // HTTP
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}