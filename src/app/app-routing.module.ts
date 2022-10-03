import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ExitAboutPageGuard} from "./pages/about-page/exit-about-page.guard";
import {EditPlaceGuard} from "./place/edit-place.guard";
import {NotAdminOrCreatorPageComponent} from "./pages/not-admin-or-creator-page/not-admin-or-creator-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {PlaceNotFoundPageComponent} from "./pages/place-not-found-page/place-not-found-page.component";
import {SectionsMetadata} from "./seo/SectionsMetadata";

// TODO SEO https://medium.com/typeqast/dealing-with-seo-on-angular-application-45f7b8645e26

const routes: Routes = [
  { path: "home",
    data:SectionsMetadata.getHome(),
    component: IndexPageComponent
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "login", component: LoginPageComponent },
  { path: "about",
    data:SectionsMetadata.getAbout(),
    component: AboutPageComponent
  },
  /*{ path: "view-place/:id", component:ViewPlacePageComponent },*/
  { path: "not-permitted", component: NotAdminOrCreatorPageComponent },
  { path: "404", component: PlaceNotFoundPageComponent },
  { path: 'places', loadChildren: () => import('./place/place.module').then(m => m.PlaceModule), canLoad:[EditPlaceGuard] },
  { path: 'view-place/:id',
    data:SectionsMetadata.getSelectedPlace(),
    loadChildren: () => import('./pages/view-place-page/view-place-page.module').then(m => m.ViewPlacePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    ExitAboutPageGuard
  ]
})
export class AppRoutingModule { }
