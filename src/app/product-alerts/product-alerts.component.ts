import { Component } from '@angular/core';

// Add new Lib
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  // Input of data products
  @Input() product;
  // Output message
  @Output() notify = new EventEmitter();
}