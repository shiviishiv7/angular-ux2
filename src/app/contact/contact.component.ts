import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  firstName:string = ''
  lastName:string = ''
  email:string = ''
  message:string = ''
  additionalMessage:string = ''
  constructor() { }

  ngOnInit(): void {
  }

}
