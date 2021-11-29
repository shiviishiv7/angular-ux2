import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email:string = '';
  password:string = '';
  confirmpassword:string = '';
  age:number = 0;
  phonenumber:number = 0;
  
  gender:string = ''

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['login'])
  }
  signup(){

  }
}
