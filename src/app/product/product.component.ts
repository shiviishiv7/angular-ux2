import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
items  = [
  {image:'../../assets/desktop1.png',type:'desktop',desc:'All type Desktop'},
  {image:'../../assets/mobile.png',type:'mobile',desc:'All type Mobile'},
  {image:'../../assets/laptop1.png',type:'laptop',desc:'All type laptop'},
  {image:'../../assets/wearable1.png',type:'wearable',desc:'All type Wearable'}
]
explore(event:any){
  console.log(event)
  this.router.navigate(['product/'+event])





  
}
}
