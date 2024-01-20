import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from '../app-routing.module';


const MaterialModules = [
  MatButtonModule,
  MatCardModule
]

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ...MaterialModules
  ]
})
export class ErrorPageModule { }
