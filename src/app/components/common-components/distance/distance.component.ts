import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-distance',
  templateUrl: './distance.component.html',
  styleUrls: ['./distance.component.scss']
})
export class DistanceComponent{
  @Input() distance:number;

  constructor() {
  }
}
