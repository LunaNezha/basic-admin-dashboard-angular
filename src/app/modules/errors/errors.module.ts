import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorsComponent } from './errors.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceUnavailableComponent } from './service-unavailable/service-unavailable.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    ErrorsComponent,
    NotFoundComponent,
    ServiceUnavailableComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    TranslateModule,
    ButtonModule,
    RippleModule,
  ]
})
export class ErrorsModule { }
