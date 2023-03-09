import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  //#region functions

  // Trae la informacion del formulario
  // 06/03/2022
  // David E.
  onSubmit(event: any) {
    console.log(event);
    console.log(this.contactForm.value);
  }
  //#endregion funtions
}
