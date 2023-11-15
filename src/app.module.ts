import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { OutputPageComponent } from './app/pages/output-page/output-page.component';
import { ParentComponent } from './app/components/parent/parent.component';
import { Child1Component } from './app/components/child1/child1.component';
import { NavBarComponent } from './app/shared/nav-bar/nav-bar.component';
import { WelcomePageComponent } from './app/pages/welcome-page/welcome-page.component';
import { AppRoutingModule } from './app/app-routing.module';
import { HotObservablesPageComponent } from './app/pages/hot-observables-page/hot-observables-page.component';
import { ObsFormComponent } from './app/components/obs-form/obs-form.component';
import { ObsResultComponent } from './app/components/obs-result/obs-result.component';
import { ColdObservablesPageComponent } from './app/pages/cold-observables-page/cold-observables-page.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OutputPageComponent,
    ParentComponent,
    Child1Component,
    NavBarComponent,
    WelcomePageComponent,
    ObsFormComponent,
    ObsResultComponent,
    HotObservablesPageComponent,
    ColdObservablesPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
