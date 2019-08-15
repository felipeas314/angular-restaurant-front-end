import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuComponent } from "./menu/menu/menu.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "restaurant",
        loadChildren: "./restaurant/restaurant.module#RestaurantModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
