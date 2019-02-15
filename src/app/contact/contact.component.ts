import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  nameValue: string;
  emailValue: string;
  MessageValue: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
