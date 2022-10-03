import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit{

  @Input() caption:string;
  @Input() name:string;
  @Input() values:any[];
  @Input() defaultValue?:any;
  @Output() changed:EventEmitter<number> = new EventEmitter<number>();

  public selectedValue:any;

  constructor() {
  }

  public onChange(value:number):void{
    console.log("selectedValue = "+this.selectedValue);
    this.changed.emit(value);
  }

  public ngOnInit(): void {
    console.log(this.caption + " defaultValue = "+this.defaultValue);
    if(this.defaultValue){
      this.selectedValue = this.defaultValue;
    }
  }
}
