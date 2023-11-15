import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { OutputPageComponent } from './pages/output-page/output-page.component';
import { HotObservablesPageComponent } from './pages/hot-observables-page/hot-observables-page.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ColdObservablesPageComponent } from './pages/cold-observables-page/cold-observables-page.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'output-page',
    component: OutputPageComponent,
  },
  {
    path: 'hot-observables-page',
    component: HotObservablesPageComponent,
  },
  {
    path: 'cold-observables-page',
    component: ColdObservablesPageComponent,
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
