import {Observable, of} from "rxjs";

export class Place {

  private distance:number;

  constructor(
    private id:number,
    private icon:string,
    private name:string,
    private address:string,
    private lat:number,
    private lng:number,
    private avatar:string,
    private description:string,
    private cost?:number,
    private numReviews?:number) {
  }

  public getId():number{
    return this.id;
  }

  public getIcon():string{
    return this.icon;
  }

  public getName():string{
    return this.name;
  }
  public getAddress():string{
    return this.address;
  }

  public getAvatar():string{
    return this.avatar;
  }

  public getDescription():string{
    return this.description;
  }

  public setDistance(distance:number):void{
    this.distance = distance;
  }

  public getDistance():Observable<number>{
    return of(this.distance);
  }

  public getDistanceSync():number{
    return this.distance;
  }

  public getCost():number{
    return this.cost;
  }

  public getLat():number{
    return this.lat;
  }
  public getLng():number{
    return this.lng;
  }
}
