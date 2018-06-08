import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { MyAssignemntComponent } from './my-assignemnt/my-assignemnt.component';
import { HeaderComponent } from './header/header.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { MyReactiveAssignmentComponent } from './my-reactive-assignment/my-reactive-assignment.component';

const appRoutes:Routes = [
  // {path: '', component :AppComponent, pathMatch:'full'},
  {path: 'my-assignment', component :MyAssignemntComponent},
  {path:'template-driven', component:TemplateDrivenComponent},
  {path: 'reactive', component:ReactiveComponent},
  {path:'my-reactive-assignment', component:MyReactiveAssignmentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyAssignemntComponent,
    HeaderComponent,
    TemplateDrivenComponent,
    ReactiveComponent,
    MyReactiveAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
