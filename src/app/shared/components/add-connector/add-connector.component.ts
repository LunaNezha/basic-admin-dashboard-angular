import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-add-connector',
  templateUrl: './add-connector.component.html',
  styleUrls: ['./add-connector.component.scss']
})
export class AddConnectorComponent extends BaseComponent implements OnInit {

  @Input() public displayDialog: boolean = false;
  @Output() public dialogState: EventEmitter<any> = new EventEmitter<any>();
  @Output() public submitted: EventEmitter<any> = new EventEmitter<any>();

  public addConnectorForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder,) {
    super();
  }

  ngOnInit(): void { }

  /**
   * submit address
   */
  public submitDialog() {
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
