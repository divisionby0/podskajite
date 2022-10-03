import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacesMapComponent } from './places-map/places-map.component';
import {AngularYandexMapsModule, YaConfig} from "angular8-yandex-maps";
import {yaMapKey} from "./MapConstants";

const mapConfig: YaConfig = {
  apikey: yaMapKey,
  lang: 'ru_RU',
};

@NgModule({
  declarations: [
    PlacesMapComponent
  ],
  exports: [
    PlacesMapComponent
  ],
  imports: [
    CommonModule,
    AngularYandexMapsModule.forRoot(mapConfig),
  ]
})
export class MapModule { }
