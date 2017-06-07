import { NgModule }      from '@angular/core';
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
import { UpdateMarksComponent } from './Component/UpdateMarksComponent';
//import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { AppComponent } from './app.component';

export const appRoutes: Routes = [
    
    { path: '', redirectTo: '/Student', pathMatch: 'full' },
    { path: 'Student', component: StudentInfoComponent },
    { path: 'Create', component: CreateComponent },
    { path: 'CreateMarks', component: CreateMarksComponent },
    { path: 'Marks', component: MarkComponent },    
    { path: 'Update', component: UpdateComponent },
    { path: 'UpdateMarks', component: UpdateMarksComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes),BrowserModule, FormsModule, HttpModule],
    providers: [StudentService,MarksService],
    declarations: [AppComponent, StudentInfoComponent, CreateComponent, MarkComponent,
        UpdateComponent, UpdateMarksComponent, CreateMarksComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }