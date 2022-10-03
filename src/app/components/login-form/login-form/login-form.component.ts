import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StringValidators} from "../../../validators/StringValidators";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {
  private _alignment:string;
  get alignment(): string {
    return this._alignment;
  }

  @Input() set alignment(value: string) {
    this._alignment = value;
  }

  private _userName:string;
  get userName(): string {
    return this._userName;
  }

  @Input() set userName(value: string) {
    this._userName = value;
  }

  public busy:boolean = false;
  public formGroup:FormGroup;
  public breakpoint:number = 1;

  public nameRequireError:boolean = false;
  public nameMinLengthError:boolean = false;
  public nameWhitespacesOnlyError:boolean = false;
  public nameMinLength:number = 5;

  private _formError:string = "";
  get formError(): string {
    return this._formError;
  }

  @Input() set formError(value: string) {
    this._formError = value;
    this.busy = !this._formError;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResized(event:any){
    this.resizeGrid(window.innerWidth);
  }

  @Output() login:EventEmitter<{login:string, password:string}> = new EventEmitter<{login: string; password: string}>();

  ngOnInit(): void {
    const savedName:string = this.userName! ? this.userName : '';

    this.formGroup = new FormGroup({
      name: new FormControl(savedName,[Validators.required, Validators.minLength(this.nameMinLength), StringValidators.noWhitespacesValidator]),
      password: new FormControl('', [Validators.required])
    });

    this.resizeGrid(window.innerWidth);
  }

  public onSubmit():void{
    this.busy = true;
    this.login.emit({login:this.formGroup.get("name").value, password:this.formGroup.get("password").value});
  }

  public onFormChange():void{
    this._formError = "";
    this.busy = false;

    this.nameRequireError = false;
    this.nameMinLengthError = false;
    this.nameWhitespacesOnlyError = false;

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
  }

  private resizeGrid(windowWidth:number):void{
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
