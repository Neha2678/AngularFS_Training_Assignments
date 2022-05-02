import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-sort',
  templateUrl: './employee-sort.component.html',
  styleUrls: ['./employee-sort.component.scss']
})
export class EmployeeSortComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output()
  onOptionClick:EventEmitter<string> = new EventEmitter();

  option_click(value:number)
  {
    this.onOptionClick.emit(value.toString());
  }

}
