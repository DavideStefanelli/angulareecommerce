import { Component, OnInit, Output, Input } from '@angular/core';
import { ProductCardComponent } from '../components/product-card/product-card.component';
import { ShopService } from '../../shop.service';
import { Product } from '../../product';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Shop } from '../../shop';
import { Shophome } from '../../shophome';
import { Category } from '../../category';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [ShopService]
})
export class ShopComponent implements OnInit {

  

  
  id : number;
  shop : Shop;
  categories : Category[];

  @Output() products : Array<Product>;

  constructor(private route: ActivatedRoute , public shopService : ShopService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });
    
    this.shopService.getShopHome(this.id).subscribe(
      (data : Shophome) => { 
        this.shop = data.shop;
        this.products = data.featuredproducts;
        this.categories = data.categories;
      }
    );
   
  
  }

}
