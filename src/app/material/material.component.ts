import { ControlName } from './../title-checker.directive';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { makeTitleChecker } from '../test.directive';
import { titleCheckerFn } from '../title-checker.directive';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  standalone: false
})
export class MaterialComponent implements OnInit {


  ngOnInit(): void {
    this.dataSource.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  }

  dataSource = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
  ];
  columndefs  = ['position'];
  selectedValue = '';

  sortData(sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource = data;
      return;
    }

    this.dataSource = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'position': return this.compare(a.position, b.position, isAsc);
        default: return 0;
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  // Call factory with parameters (reactive forms)
  readonly form: FormGroup;
  readonly newform: FormGroup;
  title;
  constructor() {
  this.form = new FormGroup({
  [ControlName.TITLE]: new FormControl('', makeTitleChecker(5)),
  [ControlName.BODY]: new FormControl(''),
  });

  this.newform = new FormGroup({
    [ControlName.TITLE]: new FormControl('', titleCheckerFn),
    [ControlName.BODY]: new FormControl(''),
    });
  }
  saving: boolean = false;

  save(): void {
    this.saving = true;
    // Juggle 5 hens while wiggling your toes and other magic... 🤡
  }
  isLoading = false;

  onButtonClick() {
    this.isLoading = true;
    // Simulate an API call or action
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // Simulate 3 seconds of loading
  }
}
