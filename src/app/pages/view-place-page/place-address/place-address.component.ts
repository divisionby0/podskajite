import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-address',
  templateUrl: './place-address.component.html',
  styleUrls: ['./place-address.component.scss']
})
export class PlaceAddressComponent{

  @Input() address:string;
  constructor() {

  }
}
