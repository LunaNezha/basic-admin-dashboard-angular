import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public model: any[];

  constructor() { }

  ngOnInit() {
    this.model = [
      {
        items: [
          { label: 'titles.dashboard', icon: 'fi fi-rr-home', routerLink: ['/'] },
          { label: 'titles.folder', icon: 'fi fi-rr-folder', routerLink: ['/folder'] },
          { label: 'titles.plans', icon: 'fi fi-rr-edit-alt', routerLink: ['/plans'] },
        ]
      },
      {
        label: 'titles.authentication',
        items: [
          { label: 'titles.login', icon: 'fi fi-rr-sign-in', routerLink: ['login'] },
          { label: 'titles.register', icon: 'fi fi-rr-user-add', routerLink: ['register'] },
          { label: 'titles.forget_password', icon: 'fi fi-rr-lock', routerLink: ['forget-password'] },
          { label: 'titles.change_phone', icon: 'fi fi-rr-mobile', routerLink: ['change-phone-number'] },
          { label: 'titles.verify_account', icon: 'fi fi-rr-shield-check', routerLink: ['verify-account'] },
        ]
      },
      {
        label: 'titles.error_mangement',
        items: [
          { label: 'titles.total_error', icon: 'fi fi-rr-cross-circle', routerLink: ['errors'] },
          { label: 'titles.not_found', icon: 'fi fi-rr-exclamation', routerLink: ['errors/**'] },
          { label: 'titles.access_denied', icon: 'fi fi-rr-lock', routerLink: ['errors/access'] },
          { label: 'titles.service_unavailable', icon: 'fi fi-rr-lock', routerLink: ['errors/service-unavailable'] },
        ]
      }
    ];
  }

  public onKeydown(event: KeyboardEvent) {
    const nodeElement = (<HTMLDivElement>event.target);
    if (event.code === 'Enter' || event.code === 'Space') {
      nodeElement.click();
      event.preventDefault();
    }
  }

}
