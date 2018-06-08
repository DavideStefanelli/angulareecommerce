import { UserComponent } from "./user/user.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router"
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RegistrationComponent } from "./registration/registration.component";

const routes : Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegistrationComponent },
    { path: "user", component: UserComponent },
    { path: "home", component: HomeComponent }
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