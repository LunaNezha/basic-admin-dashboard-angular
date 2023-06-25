import { Injector, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MessageService, SharedModule } from 'primeng/api';
import { CoreModule } from '@core/core.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ErrorsModule } from '@modules/errors/errors.module';

import { AppComponent } from './app.component';
import { ProjectsModule } from '@modules/projects/projects.module';
import { FolderModule } from '@modules/folder/folder.module';
import { PlansModule } from '@modules/plans/plans.module';
import { DashboardComponent } from './dashboard.component';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "../assets/translate/", ".json");
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'fa',
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    CoreModule,
    SharedModule,
    AuthModule,
    ErrorsModule,
    ProjectsModule,
    FolderModule,
    PlansModule,
    TableModule,
    MenuModule,
    ButtonModule,
    ChartModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
  static injector: Injector;

  constructor(private injector: Injector) {
    AppModule.injector = this.injector;
  }
}
