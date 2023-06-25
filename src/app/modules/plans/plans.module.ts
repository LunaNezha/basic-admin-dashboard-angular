import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PlansComponent,
    AddPlanComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    ButtonModule,
    TranslateModule,
    RouterModule,
    TableModule,
    InputTextModule,
    ContextMenuModule,
    FormsModule,
    DropdownModule,
    InputTextareaModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PlansModule { }
