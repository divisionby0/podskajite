import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import {PlacesService} from "./places.service";

// TODO SEO https://medium.com/typeqast/dealing-with-seo-on-angular-application-45f7b8645e26

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public currentNavigationRouteChanged$:Subject<{key:string, params:any}> = new Subject<{key:string, params:any}>();

  constructor(private router:Router,
              private authService:AuthService,
              private placesService:PlacesService) {

    this.authService.loggedInChangedStream$.subscribe(loggedIn => {
      if(!loggedIn){
        this.router.navigate(["/"]);
      }
    });

    this.placesService.getSelectedPlaceChangedSubject().subscribe(placeId => {
      this.router.navigate(["view-place/"+placeId]);
    })
  }

  public setCurrentNavigationRoute(data:{key:string, params:any}):void{
    this.currentNavigationRouteChanged$.next(data);
  }
}
