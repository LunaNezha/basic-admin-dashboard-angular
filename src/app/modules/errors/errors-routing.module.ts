import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ErrorsComponent } from './errors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';

const routes: Routes = [
  { path: 'errors', component: ErrorsComponent },
  { path: 'errors/access', component: AccessDeniedComponent },
  { path: 'errors/service-unavailable', component: ServiceUnavailableComponent },
  { path: 'errors/**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
