import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private af: AngularFireAuth) { }

  public createUser(email: string, password: string){
    return this.af.createUserWithEmailAndPassword(email,password);
  }

  public login(email: string, password: string){
    return this.af.signInWithEmailAndPassword(email,password)
  }

  public logOut(){
    return this.af.signOut()
  }

  public hasUser(){
    return this.af.authState
  }

}
