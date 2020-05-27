import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selected = 'option0';
  constructor() { }

  ngOnInit(): void {
  }

}
