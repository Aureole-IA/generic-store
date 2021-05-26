import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fromBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
      this.buildForm()

    }

  ngOnInit(): void {
  
  }

  private buildForm(){
    this.form = this.fromBuilder.group({
      email: ['' , [Validators.email, Validators.required]],
      password: ['' , [Validators.minLength(6), Validators.required]],
      passwordVerfication: ['',[Validators.required]]
    })
  }

  public register(event: Event){
    event.preventDefault();
    const value = this.form.value
    this.authService.createUser(value.email, value.password).then(()=>{
      this.router.navigate(['/admin'])
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
