import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RestaurantRoutingModule } from "./restaurant-routing.module";
import { RestaurantFormComponent } from "./restaurant-form/restaurant-form.component";
import { RestaurantListComponent } from "./restaurant-list/restaurant-list.component";
import { MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [RestaurantFormComponent, RestaurantListComponent],
  imports: [CommonModule, RestaurantRoutingModule, MatButtonModule]
})
export class RestaurantModule {}
