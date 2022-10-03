import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {CookieService} from "ngx-cookie-service";
//import {CookieService} from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInChangedStream$:Subject<boolean> = new Subject<boolean>();
  constructor(private cookieService:CookieService) {
  }

  public login(userName:string):void{

    const currentDate:Date = new Date();
    currentDate.setMonth(currentDate.getMonth() + 3);
    const host:string = window.location.hostname;

    this.cookieService.set("userName", userName, currentDate, "/", host);
    this.cookieService.set("loggedIn", "true", currentDate, "/", host);
    //this.cookieService.setUserName(userName);
    //this.cookieService.setLoggedIn();
    this.loggedInChangedStream$.next(true);
  }

  public logout():void{
    const currentDate:Date = new Date();
    currentDate.setMonth(currentDate.getMonth() + 3);
    const host:string = window.location.hostname;

    //this.cookieService.setLoggedOut();
    this.cookieService.set("loggedIn", "false", currentDate, "/", host);
    this.loggedInChangedStream$.next(false);
  }

  public isLoggedIn():boolean{
    console.log("get logged in '" + this.cookieService.get("loggedIn")+"'");
    return this.cookieService.get("loggedIn") === "true";
    //return this.cookieService.isLoggedIn();
  }

  public isAdmin():boolean{
    return true;
  }

  public canCreatePlaces():boolean{
      return this.isLoggedIn();
  }

  public getUserName():string{
    console.log("get user name '"+this.cookieService.get("userName")+"'");
    return this.cookieService.get("userName");
    //return this.cookieService.getUserName();
  }
}
