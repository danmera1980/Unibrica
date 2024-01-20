import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { canActivateLogin } from './core/guards/login.guard';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
    import('./login/login.module').then(
      m => m.LoginModule
    ),
    canActivate: [canActivateLogin]
  },
  {
    path: '',
    loadChildren: () => 
    import('./layout/layout.module').then(
      m => m.LayoutModule
    )
  },
  { path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
