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
const Mark_1 = require("../Models/Mark");
const MarksService_1 = require("../Service/MarksService");
const router_1 = require("@angular/router");
const StudentInformation_1 = require("../Models/StudentInformation");
require("rxjs/add/operator/switchMap");
const common_1 = require("@angular/common");
let UpdateMarksComponent = class UpdateMarksComponent {
    constructor(location, marksService, _router) {
        this.marksService = marksService;
        this._router = _router;
        this.errorMessage = '';
        this.student = new StudentInformation_1.StudentInformation();
        this.marks = new Mark_1.Mark();
        if (localStorage.getItem("Mark") != null && localStorage.getItem("Mark") != undefined)
            this.marks = JSON.parse(localStorage.getItem("Mark"));
        this.location = location;
    }
    getUpdate(elem) {
        console.log(elem);
        this.marksService.Update(elem).then(data => {
            //            this.refresh()
            this._router.navigate(['Marks']);
        });
    }
};
UpdateMarksComponent = __decorate([
    core_1.Component({
        selector: 'update',
        providers: [common_1.Location, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        template: `
        <div>
        <table class="table">
         	<tr>
			    Marks:	    
				<input type="number" [(ngModel)]="marks.MarkofSubject" name="studentname"  placeholder="Marks" maxlength="2" required><br>			
		    </tr>
            <button (click)="getUpdate(marks)">Update</button>
         </table>
         </div> `,
    }),
    __metadata("design:paramtypes", [common_1.Location, MarksService_1.MarksService, router_1.Router])
], UpdateMarksComponent);
exports.UpdateMarksComponent = UpdateMarksComponent;
//# sourceMappingURL=UpdateMarksComponent.js.map