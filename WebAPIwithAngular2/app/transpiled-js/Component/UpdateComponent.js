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
const StudentInformation_1 = require("../Models/StudentInformation");
require("rxjs/add/operator/switchMap");
const common_1 = require("@angular/common");
let UpdateComponent = class UpdateComponent {
    constructor(location, studentService, _router) {
        this.studentService = studentService;
        this._router = _router;
        this.students = [];
        this.errorMessage = '';
        this.student = new StudentInformation_1.StudentInformation();
        if (localStorage.getItem("CurrentStudent") != null && localStorage.getItem("CurrentStudent") != undefined)
            this.student = JSON.parse(localStorage.getItem("CurrentStudent"));
        this.location = location;
    }
    refresh() {
        this.studentService.LoadData().then(data => {
            this.students = data;
        });
    }
    getUpdate(elem) {
        console.log(elem);
        this.studentService.Update(elem).then(data => {
            //            this.refresh()
            this._router.navigate(['Student']);
        });
    }
};
UpdateComponent = __decorate([
    core_1.Component({
        selector: 'update',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: ` <div>
        <table class="table">
         	<tr>
					Student Name:	    
				<input type="text" [(ngModel)]="student.StudentName" name="studentname"  placeholder="Name" maxlength="20" required><br>
			
		</tr>
	    <tr>
					Gender:	    
				<input type="text" [(ngModel)]="student.Gender" name="gender"  placeholder="Gender" maxlength="1" required><br>
			
		</tr>
    	<tr>
					Standard:	    
				<input type="number" min=0 max=12 [(ngModel)]="student.Standard" name="standard"  placeholder="Standard"  required><br>
			
		</tr>	
    	<tr>
					Section:	    
				<input type="text" [(ngModel)]="student.Section" name="section"  placeholder="Section" maxlength="1" required><br>
			
		</tr>
    </table>
    <button (click)="getUpdate(student)">Update</button>
    </div>`,
    }),
    __metadata("design:paramtypes", [common_1.Location, StudentService_1.StudentService, router_1.Router])
], UpdateComponent);
exports.UpdateComponent = UpdateComponent;
//# sourceMappingURL=UpdateComponent.js.map