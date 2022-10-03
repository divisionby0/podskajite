import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlaceAvatarComponent} from "./place-avatar/place-avatar.component";
import {DistanceComponent} from "./distance/distance.component";
import {CostComponent} from "./cost/cost.component";
import {PluralRuDirective} from "../../directives/plural-ru.directive";


@NgModule({
  declarations: [
    PluralRuDirective,
    CostComponent,
    PlaceAvatarComponent,
    DistanceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CostComponent,
    PlaceAvatarComponent,
    DistanceComponent
  ]
})
export class CommonComponentsModule { }
