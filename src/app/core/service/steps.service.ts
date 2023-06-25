import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  forgetPasswordInformation = {
    informationInformation: {
      username: '',
      phoneNumber: ''
    },
    verifyCodeInformation: {
      oneTimeKey: ''
    },
    changePasswordInformation: {
      password: '',
      confirmPassword: ''
    }
  };

  private forgetPasswordComplete = new Subject<any>();
  public forgetPasswordComplete$ = this.forgetPasswordComplete.asObservable();

  public getForgetPasswordInformation() {
    return this.forgetPasswordInformation;
  }

  public completeForgetPassword() {
    this.forgetPasswordComplete.next(this.forgetPasswordInformation.informationInformation);
  }

}
