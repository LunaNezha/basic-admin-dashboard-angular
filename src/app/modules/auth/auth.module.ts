import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterComponent } from './register/register.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { SharedModule } from '@shared/shared.module';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { CardModule } from 'primeng/card';
import { StepsService } from '@core/service/steps.service';
import { StepsModule } from 'primeng/steps';
import { NationalCodeComponent } from './forget-password/national-code/national-code.component';
import { VerifyCodeComponent } from './forget-password/verify-code/verify-code.component';
import { ChangePasswordComponent } from './forget-password/change-password/change-password.component';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';
import { ChangePhoneNumberComponent } from './change-phone-number/change-phone-number.component';
import { InputMaskModule } from 'primeng/inputmask';
import { VerifyAccountComponent } from './verify-account/verify-account.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    NationalCodeComponent,
    VerifyCodeComponent,
    ChangePasswordComponent,
    ChangePhoneNumberComponent,
    VerifyAccountComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PasswordModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,
    InputTextModule,
    TranslateModule,
    InputNumberModule,
    DialogModule,
    SharedModule,
    CardModule,
    StepsModule,
    RouterModule,
    NgOtpInputModule,
    InputMaskModule,
  ],
  providers: [
    StepsService
  ]
})
export class AuthModule { }
