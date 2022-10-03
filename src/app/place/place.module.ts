import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { EditPlaceComponent } from './edit-place/edit-place.component';
import { CreatePlaceComponent } from './create-place/create-place.component';
import {CreatePlaceFormModule} from "../components/create-place-form/create-place-form.module";

@NgModule({
  declarations: [
    EditPlaceComponent,
    CreatePlaceComponent
  ],
    imports: [
        CommonModule,
        PlaceRoutingModule,
        CreatePlaceFormModule
    ]
})
export class PlaceModule { }
