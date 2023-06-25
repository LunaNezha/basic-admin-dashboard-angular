import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@core/components/base.component';
import { StepsService } from '@core/service/steps.service';

@Component({
  selector: 'app-national-code',
  templateUrl: './national-code.component.html',
  styleUrls: ['./national-code.component.scss']
})
export class NationalCodeComponent extends BaseComponent implements OnInit {

  @HostListener('document:keydown.escape', ['$event']) onEscapeKeyDownHandler(event: KeyboardEvent) {
    this.login();
  }
  @HostListener('document:keydown.f12', ['$event']) onF12KeydownHandler(event: KeyboardEvent) {
    this.nextPage();
  }

  public loader: boolean = false;
  public submitted: boolean = false;
  public informationInformation: any;
  public usernameForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
  });

  constructor(
    private stepsService: StepsService,
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit(): void {
    this.getInformation();
  }

  /**
 * after view init
 */
  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  /**
 * Gets information
 */
  public getInformation() {
    this.informationInformation = this.stepsService.getForgetPasswordInformation().informationInformation;
  }

  /**
   * Next page of forget password step
   */
  public nextPage() {
    if (this.usernameForm.valid) {

      this.loader = true;
      let modelForSend: string = this.usernameForm?.get('username')?.value;

      this.stepsService.forgetPasswordInformation.informationInformation = this.informationInformation;
      this.stepsService.forgetPasswordInformation.informationInformation.username = this.usernameForm?.get('username')?.value;

      this.router.navigate(['forget-password/verify-code'], {
        queryParams: {
          username: modelForSend
        }
      });

      return;
    }

    this.submitted = true;
  }

  /**
   * login
   */
  public login() {
    let username: string = this.usernameForm?.get('username')?.value;

    this.router.navigate(['/login'], {
      queryParams: {
        username: username
      }
    });
  }

}
