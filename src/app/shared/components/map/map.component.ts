import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends BaseComponent implements OnInit {

  @Input() displayMapDialog: boolean = false;
  @Output() mapDialogState: EventEmitter<any> = new EventEmitter<any>();
  @Output() submittedMapAddress: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  /**
   * submit map address
   */
  public submitMapDialog() {
    this.submittedMapAddress.emit();
  }

  /**
   * close map dialog
   */
  public closeDialog() {
    this.displayMapDialog = false;
    this.mapDialogState.emit();
  }

}
