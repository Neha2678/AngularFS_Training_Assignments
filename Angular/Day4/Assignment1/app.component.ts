import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoom';
  value: number = 0;
  product_list:any = [
    {"pname":"Panasonic" , "price":45000 , "category":"TV" , "image":"../assets/panasonic.jpg"},
    {"pname":"Samsung Galaxy" , "price":4000 , "category":"mobile" , "image":"../assets/mobile.png"},
    {"pname":"Dell" , "price":80000 , "category":"Laptop" , "image":"../assets/lap.png"},
    {"pname":"Bosch" , "price":40000 , "category":"Washing Machine" , "image":"../assets/wash.png"}
  ];
  

  show(opt:number){
    this.value = opt;
  }
}
