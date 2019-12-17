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
    // utilisation de formBuilder pour la construction des validateurs
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // on vérifie que le formulaire est valide, si oui, on simule l'enregistrement d'un utilisateur
  // en BDD par une alert 'bravo'
  onSubmitForm() {
    this.submitted = true;
    if (!(this.userForm.invalid)) {
      alert('bravo !');
    }
  }

  // permet l'utilisation dans le template avec un ngIf pour feedBack immédiat
  getControls() {
    return this.userForm.controls;
  }

}
