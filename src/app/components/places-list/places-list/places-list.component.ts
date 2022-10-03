import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Place} from "../../../Place";

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.scss']
})
export class PlacesListComponent implements OnInit {

  @Input() places: Place[] | undefined;
  @Output() placeSelected:EventEmitter<number> = new EventEmitter<number>();

  @HostListener('window:resize', ['$event'])
  onWindowResized(event:any){
    this.resizeGrid(window.innerWidth);
  }

  public breakpoint:any;
  public rowHeight:string = "1.2:1";

  constructor() { }

  ngOnInit(): void {
    this.resizeGrid(window.innerWidth);
  }

  resizeGrid(windowWidth:number):void{
    if(windowWidth <= 400){
      this.breakpoint = 1;
      this.rowHeight = "2:1";
    }
    else if(windowWidth <= 600){
      this.breakpoint = 2;
      this.rowHeight = "1.2:1";
    }
    else if(windowWidth <= 800){
      this.breakpoint = 3;
      this.rowHeight = "1.2:1";
    }
    else{
      this.breakpoint = 4;
      this.rowHeight = "1.2:1";
    }
  }
}
