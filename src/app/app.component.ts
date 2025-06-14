import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VERSION } from '@angular/material/core';
import { Router, RouterLink, RouterOutlet, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
    imports: [CommonModule, RouterLink, RouterOutlet],
})
export class AppComponent {
  title = 'material';

  routes: Routes = [];

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    // Fetch the routes from the router
    this.routes = this.router.config;
    console.log(this.routes, VERSION);
  }




}
