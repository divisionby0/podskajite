import {FormControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class StringValidators {
  public static noWhitespacesValidator(control: FormControl) : ValidationErrors | null{
    const isWhitespacesOnly:boolean = (control.value.replace(/\s/g, "")).length === 0;
    const isValid = !isWhitespacesOnly;
    return isValid ? null : { 'onlyWhitespaces': true };
  }
}
