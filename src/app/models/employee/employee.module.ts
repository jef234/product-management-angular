import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class EmployeeModule {
  constructor( public firstName: string, public lastName: string ) { }
}
