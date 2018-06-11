import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../../../product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  name: string;

  constructor() { }

  ngOnInit() {
    this.name = this.product.name.substring(0, 20);
    this.name = this.name.substring(0, this.name.lastIndexOf(' '));
  }

}
