import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {PlacesService} from "../../../places.service";

@Component({
  selector: 'app-index-page-map',
  templateUrl: './index-page-map.component.html',
  styleUrls: ['./index-page-map.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class IndexPageMapComponent implements OnDestroy {

  public markers:any[];
  public center:number[];

  private destroySubject$:Subject<boolean> = new Subject<boolean>();

  constructor(private placesService:PlacesService,
              private cdr:ChangeDetectorRef) {
    let markers:any[] = [];

    this.placesService.getPlaces().pipe(
      takeUntil(this.destroySubject$)
    ).subscribe(places => {
      places.forEach(currentPlace => {
        markers.push({id:currentPlace.getId(), name:currentPlace.getName(), position:[currentPlace.getLat(), currentPlace.getLng()]});
      })
      this.markers = markers;
    });

    this.placesService.getPlacesChangedStream().pipe(
      takeUntil(this.destroySubject$)
    ).subscribe(places => {
      markers = []
      places.forEach(currentPlace => {
        markers.push({id:currentPlace.getId(), name:currentPlace.getName(), position:[currentPlace.getLat(), currentPlace.getLng()]});
      })
      this.markers = markers;
      this.cdr.detectChanges();
    });
  }

  public onSelfPosition(position:number[]):void{
    console.log("self position ready ",position);
    this.center = position;
    this.cdr.detectChanges();
  }

  public onObjectSelected(id:number):void{
    this.placesService.selectPlace(id);
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
