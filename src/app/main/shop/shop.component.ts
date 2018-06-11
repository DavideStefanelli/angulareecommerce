import { Component, OnInit, Output, Input } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ShopService } from '../../shop.service';
import { Product } from '../../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  @Output() products : Array<Product>;
 
  constructor(public shopService : ShopService) {

  }

  ngOnInit() {
    this.shopService.getShopProducts(1).subscribe(
      (data : Product[]) => { this.products = data; }
    );
  
  }

}
