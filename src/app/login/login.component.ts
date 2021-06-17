import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/service/authentication.service';
import { MatSnackBar } from "@angular/material/snack-bar";
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
    private router: Router,
		private _snackBar: MatSnackBar,
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
			this._snackBar.open('Credenciais inválidas', '', {
				duration: 6000,
				verticalPosition: "top",
				horizontalPosition: "right",
				panelClass: 'snack-bar-danger'
			});
      console.log("credenciais zoadas", e);
    }
    this.loading = false;
  }

}
