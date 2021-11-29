import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mobileitem = [
    {image:'../../assets/mobile1.png',price:'100000',core:'Android',ram:'8GB',company:'Google'},
    {image:'../../assets/mobile2.png',price:'80000',core:'IOS',ram:'8GB',company:'Apple'},
    {image:'../../assets/mobile3.png',price:'90000',core:'Android',ram:'8GB',company:'Honor'},
    {image:'../../assets/mobile4.png',price:'40000',core:'Android',ram:'8GB',company:'Samsung'},
    {image:'../../assets/mobile5.png',price:'60000',core:'Android',ram:'8GB',company:'OPPO'}
  ]
}
