﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule,Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { StudentInfoComponent } from './Component/StudentInfoComponent'
import { StudentService } from './Service/StudentService';
import { MarksService } from './Service/MarksService';
import { MarkComponent } from './Component/MarkComponent';
import { CreateComponent } from './Component/CreateComponent';
import { CreateMarksComponent } from './Component/CreateMarksComponent';
import { UpdateComponent } from './Component/UpdateComponent';
import { ListStudentsComponent } from './Component/ListStudentsComponent';
import { StandardListComponent } from './Component/StandardListComponent';
import { UpdateMarksComponent } from './Component/UpdateMarksComponent';
import { ChartsModule } from 'ng2-charts';
import { AccountService } from './Service/AccountService';
import { RegisterComponent } from './Component/RegisterComponent';
//import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';


import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    
    { path: '', redirectTo: '/Student', pathMatch: 'full' },
    { path: 'Student', component: StudentInfoComponent },
    { path: 'Create', component: CreateComponent },
    { path: 'CreateMarks', component: CreateMarksComponent },
    { path: 'Marks', component: MarkComponent },    
    { path: 'Update', component: UpdateComponent },
    { path: 'UpdateMarks', component: UpdateMarksComponent },
    { path: 'StandardList', component: StandardListComponent },
    { path: 'ListStudents', component: ListStudentsComponent },
    { path: 'Register', component: RegisterComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes), ChartsModule, BrowserModule, FormsModule, HttpModule, Ng2Bs3ModalModule],
    providers: [StudentService, MarksService, AccountService, Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    declarations: [AppComponent, StudentInfoComponent, CreateComponent, MarkComponent,
        UpdateComponent, UpdateMarksComponent, CreateMarksComponent, StandardListComponent,
        ListStudentsComponent, GoogleChart, RegisterComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }