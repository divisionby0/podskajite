import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-places-map',
  templateUrl: './places-map.component.html',
  styleUrls: ['./places-map.component.scss']
})
export class PlacesMapComponent{

  @Output() selfPosition:EventEmitter<number[]> = new EventEmitter<number[]>();
  @Output() objectSelect:EventEmitter<number> = new EventEmitter<number>();
  @Output() mapClick:EventEmitter<number[]> = new EventEmitter<number[]>();
  @Input() center:number[];

  private map:ymaps.Map;

  private _markers:any;
  get markers(): any {
    return this._markers;
  }
  @Input() set markers(value: any) {
    this._markers = value;
  }

  @Input() zoom:number;

  constructor() {
  }

  public mapReady(data:any):void{
    console.log("Map ready ");
    const that = this;
    this.map = data.ymaps;
    console.log("data = ", data);

    (this.map as any).geolocation.get({
      provider: 'yandex',
      // The map is automatically centered by the user's position.
      mapStateAutoApply: true,
      autoReverseGeocode: true
    }).then(function (result:any) {
      // Taking the data resulting from geocoding the object and outputting it to the console.
      const position:number[] = result.geoObjects.position;
      console.log("self position:",  position);
      that.selfPosition.emit(position);
    });

    data.target.events.add("click", (event:any) => {
      this.mapClick.emit(event.get("coords"));
    });
  }

  public onPlacemarkClicked(id:number):void{
    this.objectSelect.emit(id);
  }
}
