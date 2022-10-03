import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SEOService} from "./seo.service";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers:[
    SEOService
  ],
  exports:[
    SEOService
  ]
})
export class SEOModule { }
