import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { ConfigService } from '@core/service/app.config.service';
import { AppService } from '@core/service/app.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('submenu', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class AppComponent extends BaseComponent implements AfterViewInit, OnInit {

  public isShowSidebar: boolean = true;
  public isOutletWidth: boolean = true;
  public theme: string;
  public documentClickListener: () => void;

  constructor(
    private primengConfig: PrimeNGConfig,
    public renderer: Renderer2,
    public configService: ConfigService,
    public appService: AppService,
  ) {
    super();

    this.subs.add(
      this.changeLayoutService.sidebarChanged.subscribe((res: any) => this.isShowSidebar = res),
      this.changeLayoutService.outletChanged.subscribe((res: any) => this.isOutletWidth = res),
    );

    this.changeLayoutService.showSidebar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '14px';
    this.appService.config = this.configService.config;
    this.subs.sink = this.configService.configUpdate$.subscribe(config => this.appService.config = config);
  }

  ngAfterViewInit() {
    // hides the overlay menu and top menu if outside is clicked
    this.documentClickListener = this.renderer.listen('body', 'click', (event) => {
      if (!this.appService.isDesktop()) {
        if (!this.appService.menuClick) {
          this.appService.menuActiveMobile = false;
        }

        if (!this.appService.topMenuButtonClick) {
          this.appService.hideTopMenu();
        }
      }
      else {
        if (!this.appService.menuClick && this.appService.isOverlay()) {
          this.appService.menuInactiveDesktop = true;
        }
        if (!this.appService.menuClick) {
          this.appService.overlayMenuActive = false;
        }
      }

      if (this.appService.configActive && !this.appService.configClick) {
        this.appService.configActive = false;
      }

      this.appService.configClick = false;
      this.appService.menuClick = false;
      this.appService.topMenuButtonClick = false;
    });
  }

}
