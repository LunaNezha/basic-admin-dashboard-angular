import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@core/components/base.component';
import { IConnectors } from '@core/interfaces/connectors.interface';

@Component({
  selector: 'app-add-employer',
  templateUrl: './add-employer.component.html',
  styleUrls: ['./add-employer.component.scss']
})
export class AddEmployerComponent extends BaseComponent implements OnInit {

  @Input() displayConnectorsDialog: boolean = false;
  @Output() dialogState: EventEmitter<any> = new EventEmitter<any>();
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  public addEmployerForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    nationalCode: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
  });

  public displayAddConnectorDialog: boolean = false;
  public displayConnectorDetailDialog: boolean = false;
  public connectorChecklists: IConnectors[] = [
    {
      id: 1,
      name: 'نام رابط',
      phone: '+989016495626',
      address: 'تهران، کارگر شمالی، روبروی پارک لاله، نبش کوچه همدان، طبقه همکف',
      isSelected: false,
    },
    {
      id: 2,
      name: 'نام رابط',
      phone: '+989016495626',
      address: 'تهران، کارگر شمالی، روبروی پارک لاله، نبش کوچه همدان، طبقه همکف',
      isSelected: false,
    },
    {
      id: 3,
      name: 'نام رابط',
      phone: '+989016495626',
      address: 'تهران، کارگر شمالی، روبروی پارک لاله، نبش کوچه همدان، طبقه همکف',
      isSelected: false,
    },
    {
      id: 4,
      name: 'نام رابط',
      phone: '+989016495626',
      address: 'تهران، کارگر شمالی، روبروی پارک لاله، نبش کوچه همدان، طبقه همکف',
      isSelected: false,
    },
    {
      id: 5,
      name: 'نام رابط',
      phone: '+989016495626',
      address: 'تهران، کارگر شمالی، روبروی پارک لاله، نبش کوچه همدان، طبقه همکف',
      isSelected: false,
    },
    {
      id: 6,
      name: 'نام رابط',
      phone: '+989016495626',
      address: 'تهران، کارگر شمالی، روبروی پارک لاله، نبش کوچه همدان، طبقه همکف',
      isSelected: false,
    },
  ];
  public selectedConnector: IConnectors= this.connectorChecklists[1];

  constructor(
    private formBuilder: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
  }

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
    this.displayConnectorsDialog = false;
    this.dialogState.emit();
  }

}
