import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { MaterialModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  declarations: [CategoryListComponent,CategoryFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    CategoryRoutingModule, 
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule]
})
export class CategoryModule {}
