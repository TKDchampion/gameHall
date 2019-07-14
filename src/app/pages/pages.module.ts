import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [PagesComponent, TopBarComponent, FooterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule
  ]
})
export class PagesModule { }
