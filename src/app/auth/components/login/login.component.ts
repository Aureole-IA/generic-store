import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private formBuilder: FormBuilder) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      password: ['',[Validators.minLength(6), Validators.required]]
    })
  }

  get emailElement(){
    return this.form.get('email')
  }
  get passwordlElement(){
    return this.form.get('password')
  }

}
