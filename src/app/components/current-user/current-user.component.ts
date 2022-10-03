import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss']
})
export class CurrentUserComponent implements OnDestroy{

  private destroyStream$:Subject<boolean> = new Subject<boolean>();
  public loggedIn:boolean = false;
  public userName:string;

  constructor(private router:Router,
              private authService:AuthService) {
    this.loggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();

    this.authService.loggedInChangedStream$.pipe(
      takeUntil(this.destroyStream$)
    ).subscribe(loggedIn => {
      this.userName = this.authService.getUserName();
    })
  }

  public onLogin(data:{login: string; password: string}):void{
    console.log("on login ", data);
    this.authService.login(data.login);
    this.loggedIn = this.authService.isLoggedIn();
    this.userName = this.authService.getUserName();
    alert("Вы вошли в систему");
  }

  public onLogout():void{
    this.authService.logout();
    this.loggedIn = false;
  }

  ngOnDestroy(): void {
    this.destroyStream$.next(true);
    this.destroyStream$.complete();
  }
}
