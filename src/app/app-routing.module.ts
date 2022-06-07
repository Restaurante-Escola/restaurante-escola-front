import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication/guard/authentication.guard';
import { LoginComponent } from './login/login.component';
import { AdvertenceComponent } from './main/documents/advertence/advertence.component';
import { ConclusionComponent } from './main/documents/conclusion/conclusion.component';
import { DismissalComponent } from './main/documents/dismissal/dismissal.component';
import { DocumentsComponent } from './main/documents/documents.component';
import { EnrollmentDeclarationComponent } from './main/documents/enrollment-declaration/enrollment-declaration.component';
import { ImagePrefectureComponent } from './main/documents/image-prefecture/image-prefecture.component';
import { ImageUnisantosComponent } from './main/documents/image-unisantos/image-unisantos.component';
import { PPEUniformComponent } from './main/documents/ppe-uniform/ppe-uniform.component';
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
	{path: "imagem-prefeitura/:studentId", component: ImagePrefectureComponent},
	{path: "imagem-unisantos/:studentId", component: ImageUnisantosComponent},
	{path: "advertencia/:studentId", component: AdvertenceComponent},
	{path: "declaracao-matricula/:studentId", component: EnrollmentDeclarationComponent},
	{path: "conclusao/:studentId", component: ConclusionComponent},
	{path: "desligamento/:studentId", component: DismissalComponent},
	{path: "epi-uniforme/:studentId", component: PPEUniformComponent},
	{path: "login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
