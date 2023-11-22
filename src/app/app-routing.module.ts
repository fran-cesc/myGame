import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { OutputPageComponent } from './pages/output-page/output-page.component';
import { HotObservablesPageComponent } from './pages/hot-observables-page/hot-observables-page.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { ColdObservablesPageComponent } from './pages/cold-observables-page/cold-observables-page.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent,
  },
  {
    path: 'output-page',
    component: OutputPageComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'hot-observables-page',
    component: HotObservablesPageComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'cold-observables-page',
    component: ColdObservablesPageComponent,
    canActivate: [loginGuard]

  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
