import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  emailSent: boolean = false;
  userEmail: any;

  constructor(
    private authService : AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl(''),
      senha : new FormControl('')
    });
  }

  async login(){
    this.loading = true;
    try{
      await this.authService.login(this.loginForm.value);
      this.router.navigateByUrl("/alunos");
    }
    catch(e){
      console.log("credenciais zoadas", e);
    }
    this.loading = false;
  }

}
