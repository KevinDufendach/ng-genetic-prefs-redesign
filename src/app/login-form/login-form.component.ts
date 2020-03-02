import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.auth.register(this.email, this.password);
  }

  login() {
    this.auth.signInWithEmailAndPassword(this.email, this.password);
  }

}
