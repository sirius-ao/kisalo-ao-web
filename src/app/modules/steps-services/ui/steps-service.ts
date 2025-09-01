import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
    selector: 'app-steps-service',
    imports: [  MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,],
    templateUrl: './steps-service.html',
    styleUrls: ['./steps-service.scss']
})

export class StepsService {
     private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

}