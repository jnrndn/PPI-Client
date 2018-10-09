import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { RecoverComponent } from './recover/recover.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthenticationComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  {
    path: 'recover',
    component: RecoverComponent,
  },
  {
    path: 'forgot',
    component: ForgotPassComponent,
  },
  {
    path: '**',
    redirectTo: '/auth',
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
