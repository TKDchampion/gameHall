import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'statement', loadChildren: './statement/statement.module#StatementModule' },
      { path: 'about', loadChildren: './about/about.module#AboutModule' },
      { path: 'plan', loadChildren: './plan/plan.module#PlanModule' },
      { path: 'personalInformation', loadChildren: './personal-information/personal-information.module#PersonalInformationModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
