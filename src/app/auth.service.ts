import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable} from 'rxjs';
import {User} from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly user: Observable<User | null>;

  constructor(public auth: AngularFireAuth) {
    this.user = auth.user;
  }

  login() {
    this.auth.signInAnonymously();
  }

  changeAnonymousUser() {
    this.auth.signOut().then(_ => {
      this.login();
    });
  }
}
