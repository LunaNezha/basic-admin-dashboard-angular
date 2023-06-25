import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderRoutingModule } from './folder-routing.module';
import { FolderComponent } from './folder.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { ContextMenuModule } from 'primeng/contextmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';


@NgModule({
  declarations: [
    FolderComponent
  ],
  imports: [
    CommonModule,
    FolderRoutingModule,
    ButtonModule,
    TranslateModule,
    FormsModule,
    ContextMenuModule,
    TableModule,
    InputTextModule,
    RouterModule,
    TooltipModule,
  ]
})
export class FolderModule { }
