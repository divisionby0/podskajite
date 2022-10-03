import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {DropDownComponent} from "./drop-down/drop-down.component";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DropDownComponent,
    FiltersComponent
  ],
  exports: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule
  ]
})
export class FiltersModule { }
