import {Component, OnDestroy} from '@angular/core';
import {Observable, of, Subject, takeUntil} from "rxjs";
import {PlacesService} from "../../../places.service";
import {Place} from "../../../Place";

@Component({
  selector: 'app-index-page-places-list',
  templateUrl: './index-page-places-list.component.html',
  styleUrls: ['./index-page-places-list.component.scss']
})
export class IndexPagePlacesListComponent implements OnDestroy {

  private destroySubject$:Subject<boolean> = new Subject<boolean>();
  public places$: Observable<Place[]> | undefined;

  constructor(private readonly placesService:PlacesService) {
    this.places$ = this.placesService.getPlaces();
    this.placesService.getPlacesChangedStream().pipe(
      takeUntil(this.destroySubject$)
    ).subscribe(places => {
      this.places$ = of(places);
    })
  }

  ngOnDestroy(): void {
    this.destroySubject$.next(true);
    this.destroySubject$.complete();
  }
}
