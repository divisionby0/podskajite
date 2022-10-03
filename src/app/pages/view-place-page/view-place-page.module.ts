import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPlacePageComponent } from './view-place-page/view-place-page.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonComponentsModule} from "../../components/common-components/common-components.module";
import {PlacesListModule} from "../../components/places-list/places-list.module";
import {PlaceDescriptionComponent} from "./place-description/place-description.component";
import {PlaceAddressComponent} from "./place-address/place-address.component";
import {PlacePageMapComponent} from "./place-page-map/place-page-map.component";
import {MapModule} from "../../map/map.module";

// TODO SEO https://medium.com/typeqast/dealing-with-seo-on-angular-application-45f7b8645e26
const routes: Routes = [
  {
    path: '',
    component: ViewPlacePageComponent
  }
];

@NgModule({
  declarations: [
    ViewPlacePageComponent,
    PlaceDescriptionComponent,
    PlaceAddressComponent,
    PlacePageMapComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CommonComponentsModule,
    PlacesListModule,
    MapModule
  ]

})
export class ViewPlacePageModule {
}
