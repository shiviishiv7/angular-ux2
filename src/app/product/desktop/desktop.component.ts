import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  desktopitem = [
    {image:'../../assets/desktop1.png',price:'100000',core:'i7',ram:'8GB',company:'HP'},
    {image:'../../assets/desktop2.png',price:'80000',core:'i5',ram:'8GB',company:'Dell'},
    {image:'../../assets/desktop3.png',price:'90000',core:'i7',ram:'8GB',company:'ASUS'},
    {image:'../../assets/desktop4.png',price:'40000',core:'i3',ram:'8GB',company:'Lenovo'},
    {image:'../../assets/desktop5.png',price:'60000',core:'i5',ram:'8GB',company:'Apple'}
  ]
}
