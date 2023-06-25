import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-change-phone-number',
  templateUrl: './change-phone-number.component.html',
  styleUrls: ['./change-phone-number.component.scss']
})
export class ChangePhoneNumberComponent extends BaseComponent implements OnInit {

  public password: string;
  public newPhoneNumber: string;

  constructor() {
    super();
    
    this.changeLayoutService.hideSidebar();
    this.changeLayoutService.hideTopbar();
    this.changeLayoutService.outletHasChange();
  }

  ngOnInit(): void {
  }

}
