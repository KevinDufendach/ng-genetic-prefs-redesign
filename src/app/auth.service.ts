import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly user: Observable<User | null>;

  constructor(public auth: AngularFireAuth) {
    this.user = auth.user;
  }

  login(): Promise<UserCredential> {
    return this.auth.signInAnonymously();
  }

  changeAnonymousUser() {
    this.auth.signOut().then(_ => {
      this.login();
    });
  }

  signInWithEmailAndPassword(email: string, password: string): Promise<UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string): Promise<UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email,  password);
  }

  signInWithGoogle(): Promise<UserCredential> {
    return this.signInWithGoogle();
  }
}
