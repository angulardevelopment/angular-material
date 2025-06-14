import { inject, NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { MaterialComponent } from './material/material.component';
import { PrimengComponent } from './primeng/primeng.component';
import { User } from './userdetails/user/user';
import { map } from 'rxjs';
import { Userdetails } from './userdetails/userdetails';

export const ROUTES: Routes = [
  {path: 'mat', component: MaterialComponent},
  {path: 'PrimengComponent', component: PrimengComponent},
  {path: 'Userdetails', component: Userdetails},
]