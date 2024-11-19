import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";


// Create directive to wrap validator function
@Directive({
selector: '[titleChecker]',
providers: [{
provide: NG_VALIDATORS,
useExisting: TitleCheckerDirective,
multi: true}],
})

export class TitleCheckerDirective implements Validator {
validate(control: AbstractControl): ValidationErrors|null {
return titleCheckerFn(control);
}
}

export enum ControlName  {
  TITLE =  'TITLE',
  BODY = 'BODY'
}

  
  // forms validation-
  export type ValidationErrors = {
  };
  
  export interface ValidatorFn {
  (control: AbstractControl): ValidationErrors|null;
  }
  
  // Check whether title value is present
  
  export const titleCheckerFn: ValidatorFn =
  (control: AbstractControl) => {
  const value = control.value;
  if (!value) {
  const result: ValidationErrors =
  {'titleChecker':'Title is required'};
  return result;
  }
  return null; // no error
  };