import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AboutPageComponent} from "./about-page.component";

@Injectable({
  providedIn: 'root'
})
export class ExitAboutPageGuard implements CanDeactivate<AboutPageComponent> {
  canDeactivate(
    component: AboutPageComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("CAN DEACTIVATE ?");
    alert("Exiting ...");
    return false;
  }

}
