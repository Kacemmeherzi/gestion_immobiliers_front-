// annonce-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
   selector: 'app-annonce-form',
   templateUrl: './annonce-form.component.html'
})
export class AnnonceFormComponent implements OnInit {
   annonceForm: FormGroup;

   constructor(private fb: FormBuilder) {
    this.annonceForm = this.fb.group({
      id: [null],
      titre: ['', Validators.required],
      localisation: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      description: ['', Validators.required],
      nombre_de_chambres: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      surface: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      date: ['']
   });
   }

   ngOnInit(): void {
      
   }

   // Function to submit the form data
   onSubmit(): void {
      if (this.annonceForm.valid) {
         console.log(this.annonceForm.value);
      }
   }
}
