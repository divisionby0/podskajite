import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-name',
  templateUrl: './place-name.component.html',
  styleUrls: ['./place-name.component.scss']
})
export class PlaceNameComponent{
  @Input() name:string;

  constructor() {
  }
}
