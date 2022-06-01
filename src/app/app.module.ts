import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { AuthenticationInterceptor } from './authentication/interceptor/authentication.interceptor';
import { LoginComponent } from './login/login.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DocumentsComponent } from './main/documents/documents.component';
import { MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { RegistrationFormComponent } from './main/documents/registration-form/registration-form.component';
import { EnrollmentDeclarationComponent } from './main/documents/enrollment-declaration/enrollment-declaration.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfirmDialogComponent,
    LoginComponent,
    DocumentsComponent,
    RegistrationFormComponent,
    EnrollmentDeclarationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
		MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
		MatInputModule,
		MatFormFieldModule,
		MatProgressSpinnerModule,
		ReactiveFormsModule,
		FormsModule,
		MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
  ],
  providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
		{ provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' },}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
