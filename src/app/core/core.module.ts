import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './service/product.service';
import { MenuService } from './service/app.menu.service';
import { ConfigService } from './service/app.config.service';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ConfigComponent } from './components/config/config.component';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu/menu-item/menu-item.component';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [
    FooterComponent,
    TopbarComponent,
    ConfigComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    ButtonModule,
    MenuModule,
    PanelMenuModule,
  ],
  providers: [
    ProductService,
    MenuService,
    ConfigService,
  ],
  exports: [
    FooterComponent,
    TopbarComponent,
    ConfigComponent,
    MenuComponent,
    MenuItemComponent,
  ]
})
export class CoreModule { }
