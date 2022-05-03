import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  emp_list:any[]=
  [
    {eId:1336735,eName:"Neha", eJob:"ASE",eSalary : 25000,eDeptno :200},
    {eId:1336748,eName:"Subham", eJob:"SE",eSalary : 35000,eDeptno :201},
    {eId:1336754,eName:"Rubem", eJob:"Trainee",eSalary : 5000,eDeptno :100},
    {eId:336735,eName:"Gopal", eJob:"SSE",eSalary : 15000,eDeptno :300}


  ]
}
