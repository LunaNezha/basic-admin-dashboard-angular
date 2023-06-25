import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeLayoutService {

  public isShowSidebar: boolean = false;
  public isshowTopbar: boolean = false;
  public isOutletWidth: boolean = false;

  @Output() sidebarChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() topbarChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() outletChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  // sidebar
  public showSidebar() {
    this.isShowSidebar = true;
    this.sidebarChanged.emit(this.isShowSidebar);
  }
  public hideSidebar() {
    this.isShowSidebar = false;
    this.sidebarChanged.emit(this.isShowSidebar);
  }

  // header
  public showTopbar() {
    this.isshowTopbar = true;
    this.topbarChanged.emit(this.isshowTopbar);
  }
  public hideTopbar() {
    this.isshowTopbar = false;
    this.topbarChanged.emit(this.isshowTopbar);
  }

  // outlet
  public outletHasChange() {
    this.isOutletWidth = true;
    this.outletChanged.emit(this.isOutletWidth);
  }
  public outletNotChange() {
    this.isOutletWidth = false;
    this.outletChanged.emit(this.isOutletWidth);
  }
}
