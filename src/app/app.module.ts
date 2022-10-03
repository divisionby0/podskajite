import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {UnSavedCheckGuard} from "./pages/about-page/un-saved-check.guard";
import {AuthService} from "./auth.service";
import { NotAdminOrCreatorPageComponent } from './pages/not-admin-or-creator-page/not-admin-or-creator-page.component';
import { IndexPageMapComponent } from './pages/index-page/index-page-map/index-page-map.component';
import {MapModule} from "./map/map.module";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {LoginFormModule} from "./components/login-form/login-form.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import {MatButtonModule} from "@angular/material/button";
import {FiltersModule} from "./components/filters/filters.module";
import {IndexPagePlacesListComponent} from "./pages/index-page/index-page-places-list/index-page-places-list.component";
import {PlacesListModule} from "./components/places-list/places-list.module";
import { PlaceNotFoundPageComponent } from './pages/place-not-found-page/place-not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexPageComponent,
    AboutPageComponent,
    NotAdminOrCreatorPageComponent,
    IndexPageMapComponent,
    LoginPageComponent,
    CurrentUserComponent,
    IndexPagePlacesListComponent,
    PlaceNotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    MatButtonModule,
    LoginFormModule,
    BrowserAnimationsModule,
    FiltersModule,
    PlacesListModule
  ],
  exports: [],
  providers: [
    AuthService,
    UnSavedCheckGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
