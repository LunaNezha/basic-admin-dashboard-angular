import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuService } from '@core/service/app.menu.service';
import { filter } from 'rxjs';
import { BaseComponent } from '@core/components/base.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AppService } from '@core/service/app.service';

@Component({
  selector: '[app-menu-item]',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  host: {
    '[class.active-menuitem]': 'active',
  },
  animations: [
    trigger('children', [
      state('void', style({
        height: '0px'
      })),
      state('hiddenAnimated', style({
        height: '0px'
      })),
      state('visibleAnimated', style({
        height: '*'
      })),
      transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('void => visibleAnimated, visibleAnimated => void',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class MenuItemComponent extends BaseComponent implements OnInit {

  @Input() item: any;
  @Input() index: number;
  @Input() root: boolean;
  @Input() parentKey: string;

  public active: boolean = false;
  public key: string;

  constructor(
    public appService: AppService,
    public router: Router,
    private menuService: MenuService
  ) {
    super();
    this.subs.sink = this.menuService.menuSource$.subscribe(key => {
      // deactivate current active menu
      if (this.active && this.key !== key && key.indexOf(this.key) !== 0) {
        this.active = false;
      }
    });

    this.subs.sink = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(
      params => {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();
        }
        else {
          this.active = false;
        }
      }
    );
  }

  ngOnInit() {
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }

    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);
  }

  public updateActiveStateFromRoute() {
    this.active = this.router.isActive(this.item.routerLink[0], this.item.items ? false : true);
  }

  public itemClick(event: Event) {
    event.stopPropagation();
    // avoid processing disabled items
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }

    // notify other items
    this.menuService.onMenuStateChange(this.key);

    // execute command
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }

    // toggle active state
    if (this.item.items) {
      this.active = !this.active;
    }
    else {
      // activate item
      this.active = true;

      // hide overlay menus
      this.appService.menuActiveMobile = false;

      if (this.appService.isDesktop() && this.appService.isOverlay()) {
        this.appService.menuInactiveDesktop = true;
      }
    }
  }

}
