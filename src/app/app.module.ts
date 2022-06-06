import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { ImageUnisantosComponent } from './main/documents/image-unisantos/image-unisantos.component';
import { ImagePrefectureComponent } from './main/documents/image-prefecture/image-prefecture.component';
import { AdvertenceComponent } from './main/documents/advertence/advertence.component';
import { ConclusionComponent } from './main/documents/conclusion/conclusion.component';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DismissalComponent } from './main/documents/dismissal/dismissal.component';
registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ConfirmDialogComponent,
    LoginComponent,
    DocumentsComponent,
    RegistrationFormComponent,
    EnrollmentDeclarationComponent,
    ImageUnisantosComponent,
    ImagePrefectureComponent,
    AdvertenceComponent,
    ConclusionComponent,
    DismissalComponent
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
    { provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' },},
    { provide: LOCALE_ID, useValue: 'pt-BR' },
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
