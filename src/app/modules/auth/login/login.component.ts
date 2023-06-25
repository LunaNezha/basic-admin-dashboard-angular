import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from '@core/service/app.config.service';
import { AppConfig } from '@core/interfaces/appconfig.interface';
import { Subscription } from 'rxjs';
import { BaseComponent } from '@core/components/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  public valCheck: string[] = ['remember'];
  public password: string;
  public config: AppConfig;

  constructor(
    public configService: ConfigService,
    public translate: TranslateService,  
  ){
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
}
