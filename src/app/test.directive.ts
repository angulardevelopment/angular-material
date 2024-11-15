import { Directive, Input } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

@Directive({ selector: '[titleChecker]',   standalone: true /* … */ })
export class TitleCheckerDirective implements Validator {
  @Input() titleMinlength: number | string = 2;

  validate(control: AbstractControl): ValidationErrors | null {
    const titleMinlength = Number(this.titleMinlength);
    const validator = makeTitleChecker(titleMinlength);
    return validator(control);
  }
}



// Use factory to create validator

export function makeTitleChecker(min: number): ValidatorFn {
// …
const titleCheckerFn: ValidatorFn = (control: AbstractControl) => {
// …
if (title.length < min) {
return {'titleChecker': 'Title has too few non-blank characters'};
}
return null; // no error
};
return titleCheckerFn;
}

// Check length
// export const titleCheckerFn: ValidatorFn = (control:
//   AbstractControl) => {
//   // …
//   const title = value.trim();
//   if (title.length < 3) {
//   const result =
//   {'titleChecker': 'Title has too few
//   non-blankcharacters'};
//   return result;
//   }
//   return null; // no error
//   }
  