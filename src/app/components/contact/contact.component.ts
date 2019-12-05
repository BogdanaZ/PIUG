import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  errorEmails = false;
  successfulSent = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(150)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  onSubmit(e) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    emailjs.sendForm('default_service', 'template_lBkha6YO', e.target as HTMLFormElement, 'user_tgBw7kYJg6ZlTceWbKHvD')
      .then((result: EmailJSResponseStatus) => {
        this.successfulSent = true;
      }, (error) => {
        this.errorEmails = true;
      });
  }

  onReset() {
    this.successfulSent = false;
    this.errorEmails = false;
    this.submitted = false;
    this.registerForm.reset();
  }

}
