import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModule } from '../models/employee/employee.module';

@Injectable({
  providedIn: 'root'
})
export class FormPosterService {
  private URL = 'http://localhost:4002';

  constructor(private _http: HttpClient) { }

  postEmployeeData(employee: EmployeeModule) {
    console.log('Posting employee data :: ', employee);

    return 0; // this._http.post(this.URL, employee);
  }
}
