import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantFormComponent } from "./restaurant-form/restaurant-form.component";

const routes: Routes = [
  {
    path: "form",
    component: RestaurantFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule {}
