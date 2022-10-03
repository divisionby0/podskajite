import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationService} from "../navigation.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy{

  private destroyStream$:Subject<boolean> = new Subject<boolean>();
  public canCreate:boolean;
  public loggedIn:boolean = false;

  constructor(private navigationService:NavigationService,
              private authService:AuthService) {
    this.canCreate = this.authService.canCreatePlaces();
    this.loggedIn = this.authService.isLoggedIn();

    this.authService.loggedInChangedStream$.pipe(
      takeUntil(this.destroyStream$)
    ).subscribe(loggedIn => {
      this.loggedIn = loggedIn;
      if(!this.loggedIn){
        this.canCreate = false;
      }
      else{
        this.canCreate = this.authService.canCreatePlaces();
      }
    })
  }

  public onLogOut(event:MouseEvent):void{
    event.stopPropagation();
  }

  ngOnDestroy(): void {
    this.destroyStream$.next(true);
    this.destroyStream$.complete();
  }
}
