import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefinedOrEmpty } from '@core/classes/utility.class';
import { BaseComponent } from '@core/components/base.component';
import { StepsService } from '@core/service/steps.service';

@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss'],
})
export class VerifyCodeComponent extends BaseComponent implements OnInit {
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

  @ViewChild('ngOtpInput') ngOtpInputRef: any;
  public disableVerifyCode: boolean = true;
  public loader: boolean = false;
  public verifyCodeInformation: any;
  public twofaCode: string = '';
  public username: string = '';
  public codeConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '-',
    inputStyles: {
      height: '40px',
      width: '100%'
    },
  };

  constructor(
    private stepsService: StepsService,
    private route: ActivatedRoute
  ) {
    super();
    this.startInterval();
  }

  ngOnInit(): void {
    this.getParamsValue();
    this.getVerifyCodeInformation();

    if (isNullOrUndefinedOrEmpty(this.getUsername)) {
      this.router.navigate(['/forget-password']);
    }
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
   * Gets get username
   */
  get getUsername(): string {
    return this.stepsService.forgetPasswordInformation
      .informationInformation.username;
  }

  /**
   * Gets get mobile number
   */
  get getMobileNumber(): string {
    return this.stepsService.forgetPasswordInformation
      .informationInformation.phoneNumber;
  }

  /**
   * Gets verify code information
   */
  public getVerifyCodeInformation() {
    this.verifyCodeInformation =
      this.stepsService.getForgetPasswordInformation().verifyCodeInformation;
  }

  /**
   * submit verify on login form
   */
  public nextPage() {
    this.loader = true;

    if (!this.disableVerifyCode) {
      this.router.navigate(['forget-password/change-password'], {
        queryParams: {
          username: this.username,
        },
      });
    }
  }

  /**
   * Prev page
   */
  public prevPage() {
    this.router.navigate(['forget-password']);
  }

  /**
   * Sends verify code again
   */
  public sendVerifyCodeAgain() {
    this.loader = true;
    this.clearOPT();
  }

  /**
   * On change otp input
   * @param otp
   */
  public onOtpChange(otp: any) {
    this.twofaCode = otp;

    if (otp && otp == '') {
      this.disableVerifyCode = true;
    } else {
      this.disableVerifyCode = false;
    }
  }

  public clearOPT() {
    this.ngOtpInputRef.setValue(null);
  }
}
