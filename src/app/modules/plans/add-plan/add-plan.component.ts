import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '@core/components/base.component';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styleUrls: ['./add-plan.component.scss']
})
export class AddPlanComponent extends BaseComponent implements OnInit {

  public displayAddEmployerDialog: boolean = false;
  public addPlanForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    employer: ['', Validators.required],
    description: ['', Validators.required],
  });

  public employers: string[] = [
    'نفر اول',
    'نفر دوم',
    'نفر سوم',
    'نفر چهارم',
    'نفر پنجم',
    'نفر ششم',
  ];

  public connectors: string[] = [
    'نفر اول',
    'نفر دوم',
    'نفر سوم',
    'نفر چهارم',
    'نفر پنجم',
    'نفر ششم',
  ];

  constructor(private formBuilder: FormBuilder) {
    super();

    this.changeLayoutService.showSidebar();
    this.changeLayoutService.showTopbar();
    this.changeLayoutService.outletNotChange();
  }

  ngOnInit(): void { }

}
