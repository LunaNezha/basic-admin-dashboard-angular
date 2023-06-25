import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-reject-plan',
  templateUrl: './reject-plan.component.html',
  styleUrls: ['./reject-plan.component.scss']
})
export class RejectPlanComponent extends BaseComponent implements OnInit {

  @Input() displayDialog: boolean = false;
  @Output() dialogState: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  public description: string = '';

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  /**
   * submit map address
   */
  public submitMapDialog() {
    this.submitted.emit();
  }

  /**
   * close map dialog
   */
  public closeDialog() {
    this.displayDialog = false;
    this.dialogState.emit();
  }

}
