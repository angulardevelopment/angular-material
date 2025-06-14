import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';
import { PrimengComponent } from './primeng/primeng.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxLoadingModule } from "ngx-loading";

@NgModule({
  declarations: [
    // AppComponent,
    MaterialComponent,
    PrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    DropdownModule,
    NgxLoadingButtonsModule,
    NgxLoadingModule.forRoot({}),
    MatButtonModule
  ],
  providers: [],
  bootstrap: [] // AppComponent
})
export class AppModule { }
