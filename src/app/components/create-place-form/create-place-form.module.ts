import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePlaceFormComponent } from './create-place-form/create-place-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonComponentsModule} from "../common-components/common-components.module";
import { PlacePositionSettingMapComponent } from './place-position-setting-map/place-position-setting-map.component';
import {MapModule} from "../../map/map.module";

@NgModule({
  declarations: [
    CreatePlaceFormComponent,
    PlacePositionSettingMapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatToolbarModule,
    CommonComponentsModule,
    MapModule
  ],
  exports:[
    CreatePlaceFormComponent
  ]
})
export class CreatePlaceFormModule { }
