import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-place-avatar',
  templateUrl: './place-avatar.component.html',
  styleUrls: ['./place-avatar.component.scss']
})
export class PlaceAvatarComponent implements OnInit {

  @Input() public size:string = "small";
  @Input() avatar:string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
