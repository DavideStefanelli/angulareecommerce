import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './main/home/home.component';
import { AccessService } from './access.service';
import { JsonpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { ProductComponent } from './main/product/product.component';
import { ShopComponent } from './main/shop/shop.component';
import { ProductCardComponent } from './main/components/product-card/product-card.component';
import { ShopService } from './shop.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent,
    HomeComponent,
    ShopComponent,
    ProductComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [

    AccessService,
    ShopService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
