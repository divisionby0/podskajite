import {Component, Input} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';


@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent{

  @Input() cost:number;
  constructor() {
    registerLocaleData(localeRu, 'ru');
  }
}
