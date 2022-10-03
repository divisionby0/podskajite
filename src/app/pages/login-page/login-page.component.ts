import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent{

  public userName:string;

  constructor(private authService:AuthService,
              private router:Router) {
    this.userName = this.authService.getUserName();
  }

  public onLogin(data:{login: string; password: string}):void{
    console.log("on login ", data);
    this.authService.login(data.login);
    this.router.navigate(["/"]);
  }
}
