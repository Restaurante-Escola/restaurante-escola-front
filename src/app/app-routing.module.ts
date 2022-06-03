import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/guard/authentication.guard';
import { LoginComponent } from './login/login.component';
import { DocumentsComponent } from './main/documents/documents.component';
import { EnrollmentDeclarationComponent } from './main/documents/enrollment-declaration/enrollment-declaration.component';
import { ImageUnisantosComponent } from './main/documents/image-unisantos/image-unisantos.component';
import { RegistrationFormComponent } from './main/documents/registration-form/registration-form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
	{ 
		path: "", component: MainComponent, children: [
			{ 
				path: "alunos", 
				loadChildren: () => import('./main/students/students.module').then(m => m.StudentsModule),
			},
			{ 
				path: "turmas", 
				loadChildren: () => import('./main/class/class.module').then(m => m.ClassModule),
			},
			{
				path: "frequencia", 
				loadChildren: () => import('./main/class-frequency/class-frequency.module').then(m => m.ClassFrequencyModule),
			},
			{
				path: "documentos",
				component: DocumentsComponent,
				
			}
		],
    canActivate: [AuthenticationGuard] 
	},
	{path: "ficha-cadastral/:studentId", component: RegistrationFormComponent},
	{path: "imagem-unisantos/:studentId", component: ImageUnisantosComponent},
	{path: "declaracao-matricula/:studentId", component: EnrollmentDeclarationComponent},
	{ path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
