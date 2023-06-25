import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent extends BaseComponent implements OnInit {

  public forgetPasswordSteps: MenuItem[];

  constructor(
    public translate: TranslateService,
  ) {
    super();
    
    this.changeLayoutService.hideSidebar();
    this.changeLayoutService.hideTopbar();
    this.changeLayoutService.outletHasChange();

    this.forgetPasswordSteps = [
      { label: this.languageFiles.titles.national_code, routerLink: 'national-code' },
      { label: this.languageFiles.titles.verify_code, routerLink: 'verify-code' },
      { label: this.languageFiles.titles.change_password, routerLink: 'change-password' }
    ];
  }

  ngOnInit(): void {
  }

}
