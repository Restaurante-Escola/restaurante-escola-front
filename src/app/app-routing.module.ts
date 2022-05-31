import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/guard/authentication.guard';
import { LoginComponent } from './login/login.component';
import { DocumentsComponent } from './main/documents/documents.component';
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
				
			},
			{
				path: "ficha-cadastral/:studentId",
				component: RegistrationFormComponent
			}
		],
    canActivate: [AuthenticationGuard] 
	},
	{ path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
