import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PlacesService} from "../../places.service";
import {
  CreatePlaceFormComponent
} from "../../components/create-place-form/create-place-form/create-place-form.component";
import {SEOService} from "../../seo/seo.service";

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.scss']
})
export class CreatePlaceComponent implements OnInit{

  public currentPage:string;
  public currentError:string = "Введите название чтобы можно было поставить точку на карте";

  @ViewChild('form') form:CreatePlaceFormComponent;

  constructor(private seoService: SEOService,
              private route: ActivatedRoute,
              private router: Router,
              private placesService:PlacesService) {
  }

  public onCreatePlace(placeData:any):void{
    this.currentError = Math.random() > 0.5 ? "Random error" : "";
    console.log("error = "+this.currentError);
  }

  public onPointPositionChanged(position:number[]):void{
    console.log("position: ",position);
  }

  public canExit():boolean{
    return this.form.canClose();
  }

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.seoService.updateTitle(meta.title);
    this.seoService.updateDescription(meta.description);
  }
}
