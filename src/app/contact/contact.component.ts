import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductData } from '../product-data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  result: string = '';
  name: string;
  cnt: number = 0;

  listEmail = [];

  status: boolean = false;
  productAdd(event) {
    this.result = event.target.value;
    this.cnt++;
    if (this.cnt > 10) {
      this.status = true;
    }
  }

  getRefValue(email) {
    console.log(email.value);
    this.listEmail.push(email.value);
  }

  priceLBL = 'price';
  allClass = ["text-danger", 'fw-bold'];
  bgStyle:string = "red";
  allStyle:string = "font-weight:500; color: red; font-family:arial;"
  productInformation:string;

  pid="n101";
  pname="baliram";
  price="5000";
  addProduct(data:any) {
  
  }
  
 course:string[] = ["Angular", "React", "HTML"]

}
