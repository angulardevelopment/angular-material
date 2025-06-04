import { inject, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]',
   host: { '(mousedown)': 'void handleMousedown()' },
})
export class Demo {
  // el = inject(ElementRef, InjectFlags.Optional | InjectFlags.Host | InjectFlags.SkipSelf);
   el = inject(ElementRef, { optional: true, host: true, skipSelf: true }); 
 handleMousedown(): boolean {
   // Business logic...
   return false; // This would normally prevent default if not for void
 }
  constructor() { }

}
