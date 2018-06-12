import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { Routes } from "@angular/router";
import { HomeComponent } from "./main/home/home.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ProductComponent } from "./main/product/product.component";
import { ShopComponent } from "./main/shop/shop.component";

const routes : Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "user", component: UserComponent },
    { path: "home", component: HomeComponent },
    { path: "shop/:id", component: ShopComponent },
    { path: "product/:id", component: ProductComponent }
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports:[
            RouterModule
        ],
        declarations:[]
    }
)
export class AppRoutingModule { }