import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../navigation.service";
import {SEOService} from "../../seo/seo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private seoService: SEOService,
              private route: ActivatedRoute,
              private navigationService:NavigationService) {

  }

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.seoService.updateTitle(meta.title);
    this.seoService.updateDescription(meta.description);
    this.navigationService.setCurrentNavigationRoute({key:"about", params:null});
  }
}
