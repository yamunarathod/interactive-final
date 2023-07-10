import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cft-mdew-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  experienceName:string = "Discover";

  // firstFormGroup = this._formBuilder.group({
  //   Name: ['', Validators.required],
  //   PhoneNumber: ['', Validators.required]
  // });
  // secondFormGroup = this._formBuilder.group({
  //   secondCtrl: ['', Validators.required],
  // });
  constructor(private _formBuilder: FormBuilder,public router: Router) {
  }

  submit(ngForm:any,){
    console.log(ngForm);
    this.router.navigate(["/product"],{ queryParams: { name: ngForm.name}});
  }
}
