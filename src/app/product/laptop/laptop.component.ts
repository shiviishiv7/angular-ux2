import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  laptopitem = [
    {image:'../../assets/laptop1.png',price:'100000',core:'i7',ram:'8GB',company:'HP'},
    {image:'../../assets/laptop2.png',price:'80000',core:'i5',ram:'8GB',company:'Dell'},
    {image:'../../assets/laptop3.png',price:'90000',core:'i7',ram:'8GB',company:'ASUS'},
    {image:'../../assets/laptop4.png',price:'40000',core:'i3',ram:'8GB',company:'Lenovo'},
    {image:'../../assets/laptop5.png',price:'60000',core:'i5',ram:'8GB',company:'Apple'}
  ]
}
