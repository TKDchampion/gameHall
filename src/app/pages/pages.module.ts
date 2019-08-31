import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ModalComponent } from './top-bar/component/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PagesComponent, TopBarComponent, FooterComponent, ModalComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class PagesModule { }
