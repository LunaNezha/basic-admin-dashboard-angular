import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './components/map/map.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PlanDetailsComponent } from './components/plan-details/plan-details.component';
import { SharedRoutingModule } from './shared-routing.module';
import { PanelModule } from 'primeng/panel';
import { RejectPlanComponent } from './components/reject-plan/reject-plan.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OperationsComponent } from './components/operations/operations.component';
import { ResearchGroupsComponent } from './components/operations/research-groups/research-groups.component';
import { ResearchersComponent } from './components/operations/researchers/researchers.component';
import { ResearchCouncilComponent } from './components/operations/research-council/research-council.component';
import { PlanApprovalComponent } from './components/operations/plan-approval/plan-approval.component';
import { SendSuggestionComponent } from './components/operations/send-suggestion/send-suggestion.component';
import { ReviewSuggestionComponent } from './components/operations/review-suggestion/review-suggestion.component';
import { CorrectionDescriptionComponent } from './components/operations/correction-description/correction-description.component';
import { CheckboxModule } from 'primeng/checkbox';
import { AddEmployerComponent } from './components/add-employer/add-employer.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AddConnectorComponent } from './components/add-connector/add-connector.component';

@NgModule({
  declarations: [
    MapComponent,
    FileUploadComponent,
    PlanDetailsComponent,
    RejectPlanComponent,
    OperationsComponent,
    ResearchGroupsComponent,
    ResearchersComponent,
    ResearchCouncilComponent,
    PlanApprovalComponent,
    SendSuggestionComponent,
    ReviewSuggestionComponent,
    CorrectionDescriptionComponent,
    AddEmployerComponent,
    AddConnectorComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    DialogModule,
    ButtonModule,
    TranslateModule,
    FileUploadModule,
    PanelModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  exports: [
    MapComponent,
    FileUploadComponent,
    PlanDetailsComponent,
    RejectPlanComponent,
    OperationsComponent,
    ResearchGroupsComponent,
    ResearchersComponent,
    ResearchCouncilComponent,
    PlanApprovalComponent,
    SendSuggestionComponent,
    ReviewSuggestionComponent,
    CorrectionDescriptionComponent,
    AddEmployerComponent,
    AddConnectorComponent,
  ]
})
export class SharedModule { }
