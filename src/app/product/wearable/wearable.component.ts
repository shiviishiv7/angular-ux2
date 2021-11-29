import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wearable',
  templateUrl: './wearable.component.html',
  styleUrls: ['./wearable.component.scss']
})
export class WearableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  wearableitem = [
    {image:'../../assets/wearable1.png',price:'100000',core:'Android',ram:'8GB',company:'Google'},
    {image:'../../assets/wearable2.png',price:'80000',core:'IOS',ram:'8GB',company:'Apple'},
    {image:'../../assets/wearable3.png',price:'90000',core:'Android',ram:'8GB',company:'Honor'},
    {image:'../../assets/wearable4.png',price:'40000',core:'Android',ram:'8GB',company:'Samsung'},
    {image:'../../assets/wearable5.png',price:'60000',core:'Android',ram:'8GB',company:'OPPO'}
  ]
}
