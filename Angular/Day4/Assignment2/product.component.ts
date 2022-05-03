import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
