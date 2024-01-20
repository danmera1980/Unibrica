import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common'

import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginDecorComponent } from './components/login-decor/login-decor.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

const materialModules = [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginDecorComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    ...materialModules
  ]
})
export class LoginModule {}
