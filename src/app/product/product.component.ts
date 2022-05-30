import { Component, OnInit } from '@angular/core';
import { Products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  product: Products[] = [
    {
      pid: 'P101',
      pname: 'Laptop',
      pimg: 'https://picsum.photos/seed/picsum/150/100',
      pcost: 50000,
      pdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      pid: 'P101',
      pname: 'mobile',
      pimg: 'https://picsum.photos/seed/picsum/150/100',
      pcost: 50000,
      pdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      pid: 'P101',
      pname: 'mobile',
      pimg: 'https://picsum.photos/seed/picsum/150/100',
      pcost: 50000,
      pdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      pid: 'P101',
      pname: 'mobile',
      pimg: 'https://picsum.photos/seed/picsum/150/100',
      pcost: 50000,
      pdesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
  ];
}
