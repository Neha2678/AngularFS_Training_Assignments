import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment 2';
  sortOption:string = "";
  sortList(value:string)
  {
    this.sortOption = value;
  }

}
