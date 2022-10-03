import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesListComponent } from './places-list/places-list.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {PlaceNameComponent} from "./place-name/place-name.component";
import {CommonComponentsModule} from "../common-components/common-components.module";


@NgModule({
  declarations: [
    PlacesListComponent,
    PlaceNameComponent
  ],
  exports: [
    PlacesListComponent,
    PlaceNameComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    CommonComponentsModule
  ]
})
export class PlacesListModule { }
