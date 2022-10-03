import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../auth.service";
import { CreatePlaceComponent } from "./create-place/create-place.component";

@Injectable({
  providedIn: 'root'
})
export class CreatePlaceGuard implements CanActivate, CanDeactivate<CreatePlaceComponent> {
  constructor(private authService:AuthService,
              private router:Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authService.canCreatePlaces()){
      return true;
    }
    else{
      return this.router.createUrlTree(["/not-permitted"])
    }
  }

  canDeactivate(component: CreatePlaceComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!component.canExit()){
      alert("Not saved. Save it first!");
    }
    return component.canExit();
  }
}
