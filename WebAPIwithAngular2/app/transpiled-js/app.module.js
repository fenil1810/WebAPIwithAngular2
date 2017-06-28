"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const StudentInfoComponent_1 = require("./Component/StudentInfoComponent");
const StudentService_1 = require("./Service/StudentService");
const MarksService_1 = require("./Service/MarksService");
const MarkComponent_1 = require("./Component/MarkComponent");
const CreateComponent_1 = require("./Component/CreateComponent");
const CreateMarksComponent_1 = require("./Component/CreateMarksComponent");
const UpdateComponent_1 = require("./Component/UpdateComponent");
const ListStudentsComponent_1 = require("./Component/ListStudentsComponent");
const StandardListComponent_1 = require("./Component/StandardListComponent");
const UpdateMarksComponent_1 = require("./Component/UpdateMarksComponent");
const ng2_charts_1 = require("ng2-charts");
const AccountService_1 = require("./Service/AccountService");
const RegisterComponent_1 = require("./Component/RegisterComponent");
//import { RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
const ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
const angular2_google_chart_directive_1 = require("angular2-google-chart/directives/angular2-google-chart.directive");
const common_1 = require("@angular/common");
const app_component_1 = require("./app.component");
exports.appRoutes = [
    { path: '', redirectTo: '/Student', pathMatch: 'full' },
    { path: 'Student', component: StudentInfoComponent_1.StudentInfoComponent },
    { path: 'Create', component: CreateComponent_1.CreateComponent },
    { path: 'CreateMarks', component: CreateMarksComponent_1.CreateMarksComponent },
    { path: 'Marks', component: MarkComponent_1.MarkComponent },
    { path: 'Update', component: UpdateComponent_1.UpdateComponent },
    { path: 'UpdateMarks', component: UpdateMarksComponent_1.UpdateMarksComponent },
    { path: 'StandardList', component: StandardListComponent_1.StandardListComponent },
    { path: 'ListStudents', component: ListStudentsComponent_1.ListStudentsComponent },
    { path: 'Register', component: RegisterComponent_1.RegisterComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.appRoutes), ng2_charts_1.ChartsModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        providers: [StudentService_1.StudentService, MarksService_1.MarksService, AccountService_1.AccountService, common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        declarations: [app_component_1.AppComponent, StudentInfoComponent_1.StudentInfoComponent, CreateComponent_1.CreateComponent, MarkComponent_1.MarkComponent,
            UpdateComponent_1.UpdateComponent, UpdateMarksComponent_1.UpdateMarksComponent, CreateMarksComponent_1.CreateMarksComponent, StandardListComponent_1.StandardListComponent,
            ListStudentsComponent_1.ListStudentsComponent, angular2_google_chart_directive_1.GoogleChart, RegisterComponent_1.RegisterComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map