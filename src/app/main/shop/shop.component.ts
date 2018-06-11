import { Component, OnInit, Output, Input } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ShopService } from '../../shop.service';
import { Product } from '../../product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  @Output() products : Array<Product>;

  @Input() shopId : number;

  constructor(public shopService : ShopService) {
    shopService.getShopProducts(this.shopId).subscribe(
      data => {
        this.products.push(data)
      }
    );

    console.log(this.shopId);
    console.log(this.products.length);
  }

  ngOnInit() {
    
  }

}
