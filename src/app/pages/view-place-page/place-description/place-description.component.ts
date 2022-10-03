import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-description',
  templateUrl: './place-description.component.html',
  styleUrls: ['./place-description.component.scss']
})
export class PlaceDescriptionComponent{

  @Input() description:string;
  constructor() { }

}
