import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-place-position-setting-map',
  templateUrl: './place-position-setting-map.component.html',
  styleUrls: ['./place-position-setting-map.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class PlacePositionSettingMapComponent{

  @Output() pointPositionChange:EventEmitter<number[]> = new EventEmitter<number[]>();

  public center:number[];

  @Input() public markers:any;

  constructor(private cdr:ChangeDetectorRef) {
  }

  public onSelfPosition(position:number[]):void{
    this.center = position;
    this.cdr.detectChanges();
  }

  public onMapClicked(position:number[]):void{
    this.pointPositionChange.emit(position);
  }
}
