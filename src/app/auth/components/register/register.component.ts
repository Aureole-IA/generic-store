import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
  
  }

  private buildForm(){
    this.form = this.fromBuilder.group({
      email: ['' , [Validators.email, Validators.required]],
      password: ['' , [Validators.minLength(6), Validators.required]],
      passwordVerfication: ['',[Validators.required]]
    })
  }

  get emailElement(){
    return this.form.get('email');
  }
  get passwordElement(){
    return this.form.get('password');
  }
  get passwordVerfication(){
    return this.form.get('passwordVerfication')
  }

}
