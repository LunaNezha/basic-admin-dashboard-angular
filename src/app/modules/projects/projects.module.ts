import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ContextMenuModule } from 'primeng/contextmenu';
import { KnobModule } from 'primeng/knob';
import { AddProjectComponent } from './add-project/add-project.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    TranslateModule,
    RouterModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ContextMenuModule,
    KnobModule,
    DropdownModule,
    FormsModule,
    MultiSelectModule,
  ]
})
export class ProjectsModule { }
