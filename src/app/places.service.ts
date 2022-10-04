import { Injectable } from '@angular/core';
import {Place} from "./Place";
import {
  concatMap, delay, filter, iif, interval, map, mergeMap,
  Observable,
  of,
  Subject, take, takeUntil, timeout,
} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private ready: boolean = false;
  private selectedPlace:Place;
  private filterChangedSubject$:Subject<void> = new Subject();

  private debugDescription:string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  private sourceData: Place[] = [
    new Place(0, "marker","Место 1", "address 1", 45.044514, 35.375763, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, null, 2),
    new Place(1, "bar","Мое место 2", "address 2", 45.040390, 35.364277, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 100, 2),
    new Place(2, "attraction","Его место 3", "address 3", 45.035916, 35.373643, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription,200, 2),
    new Place(3, "restaurant","Ресторанчик 4", "address 4", 45.042661, 35.363685, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 500, 2),
    new Place(4, "marker","Фонтан 5", "address 5", 45.035881, 35.378179, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 1000, 2),
    new Place(5, "restaurant","Ресторан 6", "address 6", 45.031022, 35.369009, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 2000, 2),
    new Place(6, "marker","Храм 7", "address 7", 45.030707, 35.378129, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 5000, 2),
    new Place(7, "marker","Синагога 8", "address 8", 45.025534, 35.372756, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 10000, 2),
    new Place(8, "marker","Школа боевых искусств 9", "address 9", 45.023890, 35.386362, "./assets/images/0Ar0kKKA44s.jpg", this.debugDescription, 20000, 2),
  ];

  // temp to use in debug
  private filters: any = {
    cost: 100000,
    distance: 10000
  };
  private places:Place[] = [];

  private placesChangedSubject$:Subject<Place[]> = new Subject<Place[]>();
  private selectedPlaceChangesSubject$:Subject<number> = new Subject<number>();

  constructor() {
    this.updateDistances();
    this.ready = true;
  }

  public getPlaces():Observable<Place[]>{
    this.filterPlaces();
    return of([...this.places]);
  }

  public getPlaceById(id:number):Place{
    const filtered:Place[] = this.sourceData.filter(currentPlace => {
      return currentPlace.getId() === id;
    });

    if(filtered){
      return filtered[0];
    }
  }

  public selectPlace(id:number):void{
    this.selectedPlace = this.getPlaceById(id);
    this.selectedPlaceChangesSubject$.next(id);
  }
  public getSelectedPlaceChangedSubject():Subject<number>{
    return this.selectedPlaceChangesSubject$;
  }

  public costFilterChanged(cost:number):void{
    this.filterChangedSubject$.next();
    this.filters.cost = cost;
    this.filterPlaces();
  }
  public distanceFilterChanged(distance:number):void{
    this.filterChangedSubject$.next();
    this.filters.distance = distance;
    this.filterPlaces();
  }

  public getPlacesChangedStream():Subject<Place[]>{
    return this.placesChangedSubject$;
  }

  private updateDistances():void{
    this.sourceData.forEach(place => {
      place.setDistance(Math.round(Math.random() * 10));
    })
  }

  private filterPlaces():void{
    const filtered:Place[] = [];

    of(this.sourceData).pipe(
      concatMap(places => places),
      filter(place => {
        const distanceCheck:boolean = place.getDistanceSync() <= this.filters.distance;
        if(distanceCheck){
          const costCheck:boolean = place.getCost() <= this.filters.cost;
          return costCheck;
        }
        else{
          return false;
        }
      }),
    ).subscribe(
      next => {
        filtered.push(next);
      },
        error => {
        },
      () => {
        this.places = [...filtered];
        this.placesChangedSubject$.next(this.places);
      });
  }
}
