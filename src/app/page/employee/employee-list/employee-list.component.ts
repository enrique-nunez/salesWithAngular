import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        id: 1,
        firstName: 'Jose Enrique',
        lastName: 'Nuñez Constantino',
        emailId: 'whsate@gmail.com',
      },
      {
        id: 2,
        firstName: 'Jean Carlos',
        lastName: 'Castañeda Nuñez',
        emailId: 'adan@gmail.com',
      },
      {
        id: 3,
        firstName: 'Ludith Libeth',
        lastName: 'Mendoza',
        emailId: 'libesitah20@gmail.com',
      },
      {
        id: 4,
        firstName: 'Abel Saul',
        lastName: 'Miraval',
        emailId: 'abelsaul@gmail.com',
      },
  ];
  }

}
