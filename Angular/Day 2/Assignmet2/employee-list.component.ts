import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  @Input()
  sortedValue:string="";
  sorted_emp_lists: emp[]=[];

  emp_list:emp[]=
  [
    {eId:1336735,eName:"Neha", eJob:"ASE",eSalary : 25000,eDeptno :200},
    {eId:1336748,eName:"Subham", eJob:"SE",eSalary : 35000,eDeptno :201},
    {eId:1336754,eName:"Rubem", eJob:"Trainee",eSalary : 5000,eDeptno :100},
    {eId:336735,eName:"Gopal", eJob:"SSE",eSalary : 15000,eDeptno :300}


  ]

  ngOnChanges():void
  {
    if(this.sortedValue=="")
    {
      this.sorted_emp_lists = this.emp_list;
    }
    if(this.sortedValue=="1")
    {
      this.sorted_emp_lists = this.emp_list.sort((e1,e2)=>e1.eId-e2.eId);
    }
    if(this.sortedValue=="2")
    {
      this.sorted_emp_lists = this.emp_list.sort((e1,e2)=>e1.eName > e2.eName?1:-1);
    }
    if(this.sortedValue=="3")
    {
      this.sorted_emp_lists = this.emp_list.sort((e1,e2)=>e1.eJob > e2.eJob?1:-1);
    }

    if(this.sortedValue=="4")
    {
      this.sorted_emp_lists = this.emp_list.sort((e1,e2)=>e1.eSalary-e2.eSalary);
    }
    if(this.sortedValue=="5")
    {
      this.sorted_emp_lists = this.emp_list.sort((e1,e2)=>e1.eDeptno-e2.eDeptno);
    }
  }

  ngOnInit(): void {
  }

}
class emp
{
  eId : number = 0;
  eName: string="";
  eJob:string ="";
  eSalary: number= 0;
  eDeptno: number= 0;

}
