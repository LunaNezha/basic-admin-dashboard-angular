import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent extends BaseComponent implements OnInit {

  constructor(
    public translate: TranslateService,
  ) {
    super();
    
    this.changeLayoutService.hideSidebar();
    this.changeLayoutService.hideTopbar();
    this.changeLayoutService.outletHasChange();
  }

  ngOnInit(): void {
  }

}
