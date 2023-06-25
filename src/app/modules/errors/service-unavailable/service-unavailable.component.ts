import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-service-unavailable',
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.scss']
})
export class ServiceUnavailableComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
    
    this.changeLayoutService.hideSidebar();
    this.changeLayoutService.hideTopbar();
    this.changeLayoutService.outletHasChange();
  }

  ngOnInit(): void {
  }

}
