import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassStudentsListComponent } from './class-students-list/class-students-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ClassStudentsListComponent
  }
];

@NgModule({
  declarations: [ClassStudentsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatSnackBarModule,
		MatProgressSpinnerModule,
		MatDialogModule,
		ReactiveFormsModule,
		FormsModule,
		MatSelectModule,
		MatCheckboxModule,
		MatInputModule,
  ]
})
export class ClassFrequencyModule { }
