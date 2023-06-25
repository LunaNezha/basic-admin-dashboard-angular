import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefinedOrEmpty } from '@core/classes/utility.class';
import { BaseComponent } from '@core/components/base.component';
import { StepsService } from '@core/service/steps.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {
  @HostListener('document:keydown.enter', ['$event']) onEnterKeyDownHandler(
    event: KeyboardEvent
  ) {
    this.nextPage();
  }
  @HostListener('document:keydown.escape', ['$event']) onEscapeKeyDownHandler(
    event: KeyboardEvent
  ) {
    this.prevPage();
  }
  @HostListener('document:keydown.f12', ['$event']) onF12KeydownHandler(
    event: KeyboardEvent
  ) {
    this.nextPage();
  }

  public changePasswordForm: FormGroup = this.formBuilder.group({
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });
  public loader: boolean = false;
  public isPasswordType: boolean = true;
  public isConfirmPasswordType: boolean = true;
  public changePasswordInformation: any;
  public username: string = '';

  constructor(
    private stepsService: StepsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.getParamsValue();
    this.getChangePasswordInformation();

    // if (
    //   isNullOrUndefinedOrEmpty(this.getUsername) ||
    //   isNullOrUndefinedOrEmpty(this.getVerifyCode)
    // ) {
    //   this.router.navigate(['/forget-password']);
    // }
  }

  /**
   * Gets params value
   */
  public getParamsValue() {
    this.subs.sink = this.route.queryParams.subscribe((params) => {
      this.username = params.username;
    });
  }

  /**
   * Gets username
   */
  get getUsername(): string {
    return this.stepsService.forgetPasswordInformation
      .informationInformation.username;
  }

  /**
   * Gets get verify code
   */
  get getVerifyCode(): string {
    return this.stepsService.forgetPasswordInformation.verifyCodeInformation
      .oneTimeKey;
  }

  /**
   * Gets change password information
   */
  public getChangePasswordInformation() {
    this.changePasswordInformation =
      this.stepsService.getForgetPasswordInformation().changePasswordInformation;
  }

  /**
   * submit change password form
   */
  public nextPage() {
    if (this.changePasswordForm.valid) {
      this.loader = true;
      this.stepsService.forgetPasswordInformation.changePasswordInformation = this.changePasswordInformation;
    }
  }

  /**
   * Prev page
   */
  public prevPage() {
    this.router.navigate(['forget-password/verify-code']);
  }
}
