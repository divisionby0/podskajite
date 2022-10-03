import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlacesService} from "../../../places.service";
import {Place} from "../../../Place";
import {SEOService} from "../../../seo/seo.service";

@Component({
  selector: 'app-view-place-page',
  templateUrl: './view-place-page.component.html',
  styleUrls: ['./view-place-page.component.scss']
})
export class ViewPlacePageComponent implements OnInit {

  public currentPlace:Place;

  constructor(private seoService: SEOService,
              private router:Router,
              private activatedRoute: ActivatedRoute,
              private placesService:PlacesService) {
  }

  ngOnInit(): void {
    const placeId:any = this.activatedRoute.snapshot.params["id"];

    if(isNaN(placeId)){
      this.router.navigate(["404"]);
    }
    else{
      this.currentPlace = this.placesService.getPlaceById(parseInt(placeId));
      console.log("current place: ",this.currentPlace);

      if(!this.currentPlace){
        this.router.navigate(["404"]);
      }
      else{
        const { meta } = this.activatedRoute.snapshot.data;
        let title:string = meta.title;
        title = title.replace("#placeName", this.currentPlace.getName());
        this.seoService.updateTitle(title);
        this.seoService.updateDescription(meta.description);
      }
    }
  }
}
