import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service';
import { ProductDetail } from '../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ ProductService ]
})
export class ProductComponent implements OnInit {

  id : number;
  productDetail : ProductDetail;

  constructor(private route: ActivatedRoute, private productService : ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
    });

    this.productService.getProductDetail(this.id).subscribe( 
      data => { 
        this.productDetail = data;
      }
    );


  }

}
