import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) { 
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

  public submit(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value  
      this.authService.login(value.email, value.password).then(()=>{
        this.router.navigate(['/admin'])
      })
    }else{
      alert("mal")
    }
  }

  get emailElement(){
    return this.form.get('email')
  }
  get passwordlElement(){
    return this.form.get('password')
  }

}
