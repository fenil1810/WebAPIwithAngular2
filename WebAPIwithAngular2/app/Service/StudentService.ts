import { Component,Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { AppComponent } from '../app.component';
import { Mark } from '../Models/Mark';
import { Section } from '../Models/Section';
import { MarkChart } from '../Models/MarkChart';
import { ResultInfo } from '../Models/ResultInfo';
import { StudentInformation } from '../Models/StudentInformation';
import { StandardList } from '../Models/StandardList';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
    
    students;
    
    constructor(private http: Http) { }

    LoadData(): Promise<StudentInformation[]> {
        return this.http.get('/Student')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    calcResult(model): Promise<ResultInfo[]>{
        this.id = model.Standard;
        return this.http.get('/api/ClassResult?id=' + this.id)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);

    }
    getChart(): Promise<Section[]> {
        return this.http.get('/api/GetChartData')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }

    getbarChart(model): Promise<MarkChart[]> {
        this.id = model.StudentId;
        return this.http.get('/api/MarksData?id=' + this.id)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    id:number
    LoadList(model): Promise<StudentInformation[]> {
        this.id = model.Standard;
        return this.http.get('/ListStudents?id='+this.id)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    LoadStandardData(): Promise<StandardList[]> {
        return this.http.get('/StandardList')
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
   // id: number
    LoadMarks(model): Promise<Mark[]> {
        this.id= model.StudentId;
        return this.http.get('Marks?id=' + this.id)
            .toPromise()
            .then(response => this.extractArray(response))
            .catch(this.handleErrorPromise);
    }
    Add(model) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        delete model["id"];
        let body = JSON.stringify(model);
        return this.http.post('/Create', body,
            options).toPromise().catch(this.handleErrorPromise);
    }
    Update(model) {
        let headers = new Headers({
            'Content-Type':
            'application/json; charset=utf-8'
        });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(model);
        return this.http.put('/Update', body, options)
            .toPromise()
            .catch(this.handleErrorPromise);
    }
    Delete(id: number) {
        return this.http.delete('/Delete?id=' +
            id).toPromise().catch(this.handleErrorPromise);
    }
    
    
    protected extractArray(res: Response, showprogress: boolean = true) {
        let data = res.json();

        return data || [];
    }

    protected handleErrorPromise(error: any): Promise<void> {
        try {
            error = JSON.parse(error._body);
        } catch (e) {
        }

        let errMsg = error.errorMessage
            ? error.errorMessage: error.message? error.message: error._body
            ? error._body: error.status
            ? `${error.status} - ${error.statusText}`: 'unknown server error';

        console.error(errMsg);
        return Promise.reject(errMsg);
    }
    
    

}

