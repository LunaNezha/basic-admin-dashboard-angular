import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanDetailsComponent } from './components/plan-details/plan-details.component';

const routes: Routes = [
  { path: 'plan-details', component: PlanDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
