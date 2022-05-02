import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  @Input()
  type:string = "";
  product_filter:Products[] = [];

  public productlist:Products[]=[

    {pid:1 , pname:"Nokia 11",price:1000,category:"Mobile"},
    {pid:2 , pname:"Panasonic HD",price: 45000,category:"Television"},
    {pid:3 , pname:"Iphone X",price:100000,category:"Mobile"},
    {pid:4 , pname:"Motorala",price:4000,category:"Mobile"},
    {pid:5 , pname:"LG roll ",price: 450000,category:"Television"},
    {pid:6 , pname:"PS5",price: 55000,category:"Gaming"},

  ]
  ngOnInit(): void {
    this.product_filter = this.productlist.filter(p=>p.category==this.type);
  }

}

class Products{
  pid: number =0;
  pname:string="";
  price: number= 0;
  category:string=""
}
