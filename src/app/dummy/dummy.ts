import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dummy',
  imports: [],
  templateUrl: './dummy.html',
  styleUrl: './dummy.scss'
})
export class Dummy {
  readonly title = input<string>();

}
