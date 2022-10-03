import { Injectable } from '@angular/core';

@Injectable()
export class CookieService{

  constructor() {
  }

  public setUserName(userName:string):void{
    const cookieData:any  = {
      "userName":userName,
      logged:this.isLoggedIn()
    };
    document.cookie = JSON.stringify(cookieData);
  }

  public getUserName():string{
    const cookies:string = document.cookie;
    const baseParts:string[] = cookies.split(";");

    for(let k:number = 0; k < baseParts.length; k++){
      let currentBasePart:string = baseParts[k];

      try{
        currentBasePart = currentBasePart.split("=")[0];
      }
      catch(error){

      }
      try{
        const data:any = JSON.parse(currentBasePart);

        if(data.hasOwnProperty('userName')){
          return data["userName"];
        }
      }
      catch(error){
        //this.log("Error parse basePart "+currentBasePart);
      }
    }
    return 'undefined user';
  }

  public setLoggedIn():void{

    const cookieData:any  = {
      "userName":this.getUserName(),
      logged:true
    };
    console.log("set logged in cookieData = ", cookieData);

    document.cookie = JSON.stringify(cookieData);
  }
  public setLoggedOut():void{
    const cookieData:any  = {
      "userName":this.getUserName(),
      logged:false
    };
    console.log("set logged out cookieData = ", cookieData);
    document.cookie = JSON.stringify(cookieData);
  }

  public isLoggedIn():boolean{
    const cookies:string = document.cookie;
    const baseParts:string[] = cookies.split(";");

    for(let k:number = 0; k<baseParts.length; k++){
      let currentBasePart:string = baseParts[k];

      try{
        currentBasePart = currentBasePart.split("=")[0];
      }
      catch(error){

      }
      try{
        const data:any = JSON.parse(currentBasePart);

        if(data.hasOwnProperty('logged')){
          return data["logged"] === true;
        }
      }
      catch(error){
        //this.log("Error parse basePart "+currentBasePart);
      }
    }
    return false;
  }
}
