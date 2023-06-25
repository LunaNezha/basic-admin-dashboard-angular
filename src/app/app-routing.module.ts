import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '', pathMatch: 'full', component: DashboardComponent },
      { path: '', loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule) },
      { path: '', loadChildren: () => import('@modules/projects/projects.module').then(m => m.ProjectsModule) },
      { path: '', loadChildren: () => import('@modules/folder/folder.module').then(m => m.FolderModule) },
      { path: '', loadChildren: () => import('@modules/plans/plans.module').then(m => m.PlansModule) },
      { path: '', loadChildren: () => import('@modules/errors/errors.module').then(m => m.ErrorsModule) },
    ],
    { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}