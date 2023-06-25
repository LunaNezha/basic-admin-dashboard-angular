import { Injectable } from '@angular/core';
import { AppConfig } from '@core/interfaces/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public menuMode: string = 'static';
  public configActive: boolean = false;
  public configClick: boolean = false;
  public topMenuActive: boolean = false;
  public menuClick: boolean = false;
  public menuActiveMobile: boolean = false;
  public overlayMenuActive: boolean = false;
  public staticMenuInactive: boolean = false;
  public topMenuButtonClick: boolean = false;
  public topMenuLeaving: boolean = false;
  public menuInactiveDesktop: boolean = false;
  public config: AppConfig;

  constructor() { }


  public isDesktop() {
    return window.innerWidth > 992;
  }

  public isStatic() {
    return this.menuMode === 'static';
  }

  public isOverlay() {
    return this.menuMode === 'overlay';
  }

  public isMobile() {
    return window.innerWidth < 1024;
  }

  public onConfigClick(event) {
    this.configClick = true;
  }

  public toggleMenu(event: Event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.menuMode === 'overlay') {
        if (this.menuActiveMobile === true) {
          this.overlayMenuActive = true;
        }

        this.overlayMenuActive = !this.overlayMenuActive;
        this.menuActiveMobile = false;
      }
      else if (this.menuMode === 'static') {
        this.staticMenuInactive = !this.staticMenuInactive;
      }
    }
    else {
      this.menuActiveMobile = !this.menuActiveMobile;
      this.topMenuActive = false;
    }

    event.preventDefault();
  }

  public toggleTopMenu(event: Event) {
    this.topMenuButtonClick = true;
    this.menuActiveMobile = false;

    if (this.topMenuActive) {
      this.hideTopMenu();
    }
    else {
      this.topMenuActive = true;
    }

    event.preventDefault();
  }

  public hideTopMenu() {
    this.topMenuLeaving = true;

    setTimeout(() => {
      this.topMenuActive = false;
      this.topMenuLeaving = false;
    }, 1);
  }

}
