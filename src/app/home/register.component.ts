import { Component, OnInit } from '@angular/core';
import { EmployeeModule } from '../models/employee/employee.module';
import { FormPosterService } from '../services/FormPoster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  pageTitle = 'Welcome to Register';
  languages = ['English', 'Hindi', 'French', 'German'];

  model = new EmployeeModule('Jeffrey', 'Rajkumar');

  constructor(private formPoster: FormPosterService) { }

  ngOnInit() {
  }

  firstLetterToUppercse(value: string) {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  submitForm(form: NgForm) {
    console.log(form.value);
    // this.formPoster.postEmployeeData(form.value).subscribe((res) => console.log('Data posted'));
    this.formPoster.postEmployeeData(form.value);
    alert('Data posted');
  }
}
