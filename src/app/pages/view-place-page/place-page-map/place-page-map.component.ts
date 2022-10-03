import {Component, Input, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {Place} from "../../../Place";
import {PlacesService} from "../../../places.service";

@Component({
  selector: 'app-place-page-map',
  templateUrl: './place-page-map.component.html',
  styleUrls: ['./place-page-map.component.scss']
})
export class PlacePageMapComponent implements OnDestroy {
  private _center:number[];
  get center(): number[] {
    return this._center;
  }

  @Input() set center(value: number[]) {
    this._center = value;
  }

  private _place:Place;
  get place(): Place {
    return this._place;
  }

  @Input() set place(value: Place) {
    this._place = value;
    this.generateMapData();
  }

  public markers:any;

  private destroySubject$:Subject<boolean> = new Subject<boolean>();

  constructor(private placesService:PlacesService) {
  }

  private generateMapData():void{
    this.markers = [
      {id:this._place.getId(), name:this._place.getName(), position:[this._place.getLat(), this._place.getLng()]}
    ];
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
