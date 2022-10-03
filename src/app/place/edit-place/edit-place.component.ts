import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../../navigation.service";

@Component({
  selector: 'app-edit-place',
  templateUrl: './edit-place.component.html',
  styleUrls: ['./edit-place.component.scss']
})
export class EditPlaceComponent implements OnInit {

  public id: string = '';

  constructor(private navigationService:NavigationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.navigationService.setCurrentNavigationRoute({key: "edit", params: {id: this.id}});
  }
}
