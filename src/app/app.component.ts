import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  title = 'User Registration';

  constructor(private _formBuilder: FormBuilder) {}




  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      userId: ['', Validators.required],
      emailID: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    })
  }

  submitForm1() {
   // console.log(this.firstFormGroup.value);
  }
  onSubmitForm(){
    console.log('submitted');
    console.log(this.firstFormGroup.get('userId'));
  }
}
