import { Component } from '@angular/core';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrl: './primeng.component.scss',
  standalone: false
})
export class PrimengComponent {
  selectedCity = '';
  cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
}
