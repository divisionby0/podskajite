import { Component, OnInit } from '@angular/core';
import {NavigationService} from "../../navigation.service";
import {ActivatedRoute} from "@angular/router";
import {SEOService} from "../../seo/seo.service";

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {

  constructor(private seoService: SEOService,
              private route: ActivatedRoute,
              private navigationService:NavigationService) {
  }

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.seoService.updateTitle(meta.title);
    this.seoService.updateDescription(meta.description);

    this.navigationService.setCurrentNavigationRoute({key:"home", params:null});
  }
}
