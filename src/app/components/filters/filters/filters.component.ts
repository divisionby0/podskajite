import {Component, HostListener, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {PlacesService} from "../../../places.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  public breakpoint:any;

  private transportationTypes:any[] = [
    {text:"На авто", value:0},
    {text: "На велосипеде", value: 1},
    {text: "Пешком", value: 2}
  ];

  private distances:any[] = [
    {text:"0 - 2 км", value: 2},
    {text: "2 - 5  км", value: 5},
    {text: "5 - 10 км", value: 10},
    {text: "10 - 50 км", value: 50},
    {text: "50 - 200 км", value: 200},
    {text: "200 - 1000 км", value: 1000},
    {text: "Неограничено", value: 10000}
  ];

  public costs:any[] = [
    {text: "Бесплатно", value:0},
    {text: "До 200 руб", value:200},
    {text: "До 500 руб", value:500},
    {text: "До 1000 руб", value:1000},
    {text: "До 2000 руб", value:2000},
    {text: "До 5000 руб", value:5000},
    {text: "До 10000 руб", value:10000},
    {text: "Без ограничения", value:100000},
  ]

  private currentDistances:any[] = [...this.distances];

  @HostListener('window:resize', ['$event'])
  onWindowResized(event:any){
    this.resizeGrid(window.innerWidth);
  }

  constructor(private placesService:PlacesService) {

  }

  ngOnInit(): void {
    this.resizeGrid(window.innerWidth);
  }

  public getTransportationTypes():Observable<any[]>{
    return of(this.transportationTypes);
  }
  public getDistances():Observable<any[]>{
    return of([...this.currentDistances]);
  }

  public onTransportationTypeChanged(value:number):void{
    if(value === 2){
      const filtered:any[] = this.distances.filter(currentDistance => {
        return currentDistance.value < 50;
      });
      this.currentDistances = [...filtered];
    }
    else if(value === 1){
      const filtered:any[] = this.distances.filter(currentDistance => {
        return currentDistance.value < 200;
      });
      this.currentDistances = [...filtered];
    }
    else{
      this.currentDistances = [...this.distances]
    }
  }

  public onDistanceChanged(distance:number):void{
    this.placesService.distanceFilterChanged(distance);
  }

  public onCostChanged(cost:number):void{
    this.placesService.costFilterChanged(cost);
  }

  resizeGrid(windowWidth:number):void{
    if(windowWidth <= 400){
      this.breakpoint = 1;
    }
    else if(windowWidth <= 600){
      this.breakpoint = 2;
    }
    else if(windowWidth <= 800){
      this.breakpoint = 3;
    }
    else{
      this.breakpoint = 4;
    }
  }
}
