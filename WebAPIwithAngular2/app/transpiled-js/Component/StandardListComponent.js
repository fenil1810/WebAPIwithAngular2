"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const StudentService_1 = require("../Service/StudentService");
const router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
let StandardListComponent = class StandardListComponent {
    constructor(studentService, _router) {
        this.studentService = studentService;
        this._router = _router;
        this.standard = [];
        this.refresh();
    }
    //public standard: StandardList = new StandardList();
    refresh() {
        this.studentService.LoadStandardData().then(data => {
            this.standard = data;
        });
    }
    getList(stud) {
        localStorage.setItem("CurrentStandard", JSON.stringify(stud));
        this._router.navigate(['ListStudents']);
    }
};
StandardListComponent = __decorate([
    core_1.Component({
        selector: 'stdinfo',
        template: ` <div>
        <a href="jQueryGoogleChart.aspx">Dashboard</a>
        <a (click)="NavigateToCreate()">Create</a>
        <table class="table">
            <tr>
                <th>Standard</th>                
            </tr>
            <tr *ngFor="let std of standard">
                <td>{{std.Standard}}</td>
                <td><a (click)="getList(std)">List</a></td>
                <td><a (click)="getResult(std)">Result</a></td>
            </tr>
        </table>
    </div>`,
    }),
    __metadata("design:paramtypes", [StudentService_1.StudentService, router_1.Router])
], StandardListComponent);
exports.StandardListComponent = StandardListComponent;
//# sourceMappingURL=StandardListComponent.js.map