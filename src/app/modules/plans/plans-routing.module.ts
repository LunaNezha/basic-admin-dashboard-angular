import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlanComponent } from './add-plan/add-plan.component';
import { PlansComponent } from './plans.component';

const routes: Routes = [
  { path: 'plans', component: PlansComponent },
  { path: 'plans/add', component: AddPlanComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlansRoutingModule { }
