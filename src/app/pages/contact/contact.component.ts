import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // title = 'My first AGM project';
  // lat = 51.678418;
  // lng = 7.809007;
  
  contactForm:FormGroup = this.fb.FormGroup({
    name: ['test', [Validators.required] ],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }


}
