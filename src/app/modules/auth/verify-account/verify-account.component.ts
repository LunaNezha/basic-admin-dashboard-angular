import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent extends BaseComponent implements OnInit {

  @ViewChild('ngOtpInput') ngOtpInputRef: any;
  public disableVerifyCode: boolean = true;
  public phoneNumber: string = '09118717743';
  public twofaCode: string = '';
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

  constructor() {
    super();
    
    this.changeLayoutService.hideSidebar();
    this.changeLayoutService.hideTopbar();
    this.changeLayoutService.outletHasChange();
  }

  ngOnInit(): void {
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

}
