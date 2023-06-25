import { Component, OnInit } from '@angular/core';
import { AppConfig } from '@core/interfaces/appconfig.interface';
import { ConfigService } from '@core/service/app.config.service';
import { PrimeNGConfig } from 'primeng/api';
import { BaseComponent } from '@core/components/base.component';
import { AppService } from '@core/service/app.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent extends BaseComponent implements OnInit {

  public scale: number = 14;
  public scales: any[] = [12, 13, 14, 15, 16];
  public config: AppConfig;

  constructor(
    public appService: AppService,
    public configService: ConfigService,
    public primengConfig: PrimeNGConfig,
  ) {
    super();
  }

  ngOnInit() {
    this.config = this.configService.config;
    this.subs.sink = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
      this.primengConfig.ripple = true;
      this.scale = 14;

      this.applyScale();
    });
  }

  public onConfigButtonClick(event) {
    this.appService.configActive = !this.appService.configActive;
    this.appService.configClick = true;
    event.preventDefault();
  }

  public incrementScale() {
    this.scale++;
    this.applyScale();
  }

  public decrementScale() {
    this.scale--;
    this.applyScale();
  }

  public applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }

  public changeTheme(theme: string, dark: boolean) {
    let themeElement = document.getElementById('theme-css');
    themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
    this.configService.updateConfig({ ...this.config, ...{ theme, dark } });
  }

}
