import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { AppConfig } from '@core/interfaces/appconfig.interface';
import { ConfigService } from '@core/service/app.config.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComponent implements OnInit {

  public displayMapDialog: boolean = false;
  public valCheck: string[] = ['remember'];
  public password: string;
  public confirmPassword: string;
  public config: AppConfig;

  constructor(
    public configService: ConfigService,
    public translate: TranslateService,
  ) {
    super();
    
    this.changeLayoutService.hideSidebar();
    this.changeLayoutService.hideTopbar();
    this.changeLayoutService.outletHasChange();
  }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subs.sink = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
  }

  public getCompanyMapAddress() {

  }

}
