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
  // regExp: RegExp

  contactForm:FormGroup = this.fb.group({
    name: ['', [Validators.required] ],
    phone: ['', [Validators.required] ],
    email: ['', [Validators.required] ],
    subject: ['', [Validators.required] ],
    description: ['', [Validators.required] ],
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  //#region functions
  
  // Trae la informacion del formulario
  // 06/03/2022
  // David E.
  submit(event:any)
  {
    console.log(event)
    console.log(this.contactForm.value)
  }
  //#endregion funtions
}
