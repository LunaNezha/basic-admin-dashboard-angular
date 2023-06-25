import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePhoneNumberComponent } from './change-phone-number/change-phone-number.component';
import { ChangePasswordComponent } from './forget-password/change-password/change-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NationalCodeComponent } from './forget-password/national-code/national-code.component';
import { VerifyCodeComponent } from './forget-password/verify-code/verify-code.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'change-phone-number', component: ChangePhoneNumberComponent },
  { path: 'verify-account', component: VerifyAccountComponent },
  {
    path: 'forget-password', component: ForgetPasswordComponent, children: [
      { path: '', redirectTo: 'national-code', pathMatch: 'full' },
      { path: 'national-code', component: NationalCodeComponent },
      { path: 'verify-code', component: VerifyCodeComponent },
      { path: 'change-password', component: ChangePasswordComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }