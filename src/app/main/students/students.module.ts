import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { EditCreateStudentComponent } from './edit-create-student/edit-create-student.component'
import { MatDialogModule } from "@angular/material/dialog";

const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent
  }
];

@NgModule({
  declarations: [StudentsListComponent, EditCreateStudentComponent],
  imports: [
    CommonModule,
		RouterModule.forChild(routes),
		NgxMaskModule.forRoot(),
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDialogModule
  ]
})
export class StudentsModule { }
