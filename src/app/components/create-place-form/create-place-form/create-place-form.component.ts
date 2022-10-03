import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PlacesService} from "../../../places.service";
import {StringValidators} from "../../../validators/StringValidators";

// https://www.youtube.com/watch?v=0YbCzr1e0og

@Component({
  selector: 'app-create-place-form',
  templateUrl: './create-place-form.component.html',
  styleUrls: ['./create-place-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CreatePlaceFormComponent implements OnInit {

  public mapMarkers:any[];

  public nameMinLength:number = 5;

  private _formError:string = "";
  get formError(): string {
    return this._formError;
  }

  @Input() set formError(value: string) {
    this._formError = value;
    this.busy = !this._formError;
  }

  @Output() createPlace:EventEmitter<any> = new EventEmitter<any>();

  public busy:boolean = false;
  public formGroup:FormGroup;

  public nameRequireError:boolean = false;
  public nameMinLengthError:boolean = false;
  public nameWhitespacesOnlyError:boolean = false;

  public breakpoint:any;

  @HostListener('window:resize', ['$event'])
  onWindowResized(event:any){
    this.resizeGrid(window.innerWidth);
  }

  public fileAttr:string = 'Выберите картинку';
  @ViewChild('fileInput') fileInput: ElementRef;
  public avatarImage:string;


  constructor(private placesService:PlacesService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(this.nameMinLength), StringValidators.noWhitespacesValidator]),
      address: new FormControl('address', [Validators.required, Validators.min(5)]),
      lat: new FormControl('',[Validators.required, Validators.min(0)]),
      lng: new FormControl('',[Validators.required, Validators.min(0)]),
      avatar: new FormControl(''),
      cost: new FormControl('0', [Validators.required, Validators.min(0)])
    });

    this.resizeGrid(window.innerWidth);
  }

  public onFormChange():void{
    this._formError = "";
    this.busy = false;

    this.nameRequireError = false;
    this.nameMinLengthError = false;
    this.nameWhitespacesOnlyError = false;

    console.log("name validation errors: ",this.formGroup.get("name").errors);

    if(this.formGroup.get("name").errors){
      if(this.formGroup.get("name").errors['require']){
        this.nameRequireError = true;
      }
      else if(this.formGroup.get("name").errors['minlength']){
        this.nameMinLengthError = true;
      }
      else if(this.formGroup.get("name").errors['onlyWhitespaces']){
        this.nameWhitespacesOnlyError = true;
      }
    }
    this.updatePoint();
  }

  public onSubmit():void{
    this.busy = true;
    this.createPlace.emit(this.formGroup.value);
  }

  public onPointPositionChanged(position:number[]):void{
    this.formGroup.controls["lat"].setValue(position[0]);
    this.formGroup.controls["lng"].setValue(position[1]);

    this.updatePoint();
  }

  public canClose():boolean{
    return this.formGroup.dirty;
  }

  public uploadFileEvt(imgFile: any):void{
    console.log("uploadFileEvt imgFile",imgFile);

    if (imgFile.target.files && imgFile.target.files[0]) {
      console.log("file name = "+imgFile.target.files[0].name);
      this.fileAttr = imgFile.target.files[0].name

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
          console.log("imgBase64Path = ",imgBase64Path);
          this.formGroup.get("avatar").setValue(imgBase64Path);
          this.avatarImage = imgBase64Path;
          console.log("avatar form control name value = ",this.formGroup.get("avatar").value);
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
    }
    else {
      this.fileAttr = 'Выберите картинку';
    }
  }

  private updatePoint():void{
    const lat:number = this.formGroup.controls["lat"].value;
    const lng:number = this.formGroup.controls["lng"].value;
    const name:string = this.formGroup.controls["name"].value;

    if(lat && lng && name){
      this.mapMarkers = [{id:Math.round(Math.random() * 1000), name:this.formGroup.controls["name"].value, position:[lat, lng]}];
      this.cdr.detectChanges();
    }
  }

  resizeGrid(windowWidth:number):void{
    if(windowWidth <= 400){
      this.breakpoint = 1;
    }
    else if(windowWidth <= 600){
      this.breakpoint = 2;
    }
    else if(windowWidth <= 800){
      this.breakpoint = 3;
    }
    else{
      this.breakpoint = 4;
    }
  }
}
