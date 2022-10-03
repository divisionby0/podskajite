import {Inject, Injectable} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class SEOService {

  constructor(@Inject(DOCUMENT) private dom,
              private titleSvc: Title,
              private metaSvc: Meta) {
  }

  updateTitle(title: string){
    this.titleSvc.setTitle(title)
  }

  updateDescription(content: string) {
    this.metaSvc.updateTag({ name: 'description', content })
  }

  createCanonicalLink(url: string) {
    let link: HTMLLinkElement = this.dom.createElement('link');

    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    this.dom.head.appendChild(link);
  }
}
