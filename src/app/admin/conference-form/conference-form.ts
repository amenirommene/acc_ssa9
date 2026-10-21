import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-conference-form',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './conference-form.html',
  styleUrl: './conference-form.css',
})
export class ConferenceForm {

  private fb = inject(FormBuilder);
  myForm : FormGroup = new FormGroup({
    title : new FormControl('',[Validators.required, Validators.minLength(11), Validators.pattern("^[^ ]+$")]),
    description: new FormControl('',Validators.required),
    date: new FormControl(),
    nbmax:new FormControl(),
    place : new FormControl()
  })
  //FormBuilder
myForm2 : FormGroup = this.fb.group({
   title : ['',[Validators.required, Validators.minLength(11), Validators.pattern("^[^ ]+$")]],
    description: ['',Validators.required],
    date: [],
    nbmax:[],
    place : []
})
  formStatus = toSignal(this.myForm.statusChanges);

  get Title(){
    return this.myForm.get('title');
  }
}
