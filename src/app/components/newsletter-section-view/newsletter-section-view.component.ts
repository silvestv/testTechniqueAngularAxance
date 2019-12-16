import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-newsletter-section-view',
  templateUrl: './newsletter-section-view.component.html',
  styleUrls: ['./newsletter-section-view.component.less']
})
export class NewsletterSectionViewComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  onSubmitForm() {
    this.submitted = true;
    if (!(this.userForm.invalid)) {
      alert('bravo !');
    }
  }

  getControls() {
    return this.userForm.controls;
  }

}
