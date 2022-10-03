import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditPlaceComponent} from "./edit-place/edit-place.component";
import {CreatePlaceComponent} from "./create-place/create-place.component";
import {CreatePlaceGuard} from "./create-place.guard";
import {SectionsMetadata} from "../seo/SectionsMetadata";

// TODO SEO https://medium.com/typeqast/dealing-with-seo-on-angular-application-45f7b8645e26

const routes: Routes = [
  { path: "edit/:id" , component: EditPlaceComponent },
  { path: "create",
    data:SectionsMetadata.getCreatePlace(),
    component: CreatePlaceComponent,
    canActivate:[CreatePlaceGuard],
    canDeactivate:[CreatePlaceGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaceRoutingModule { }
