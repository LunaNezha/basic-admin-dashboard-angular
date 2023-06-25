import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/add', component: AddProjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
