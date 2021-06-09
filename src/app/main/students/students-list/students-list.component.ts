import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EditCreateStudentComponent } from '../edit-create-student/edit-create-student.component';
import { StudentsService } from '../students.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

	displayedColumns: any = []
  dataSource: any = [];
  loading: boolean = true;
  students: any = [];

  constructor(private studentsService: StudentsService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

	ngAfterViewInit(){
		this.getStudents();
	}

	async getStudents(){
		this.loading = true;
		this.students = await this.studentsService.getStudents();
		console.log("x", this.students);
		this.dataSource = new MatTableDataSource(this.students);
		this.displayedColumns = ['icon', 'name', 'cpf', 'years', 'class', 'email', 'cellphone'];
		this.loading = false;
  }

	async createStudent(){
		const dialogRef = this.dialog.open(EditCreateStudentComponent, {
			maxWidth: "1200px",
			autoFocus : false
		});

		let isSaved = await dialogRef.afterClosed().toPromise();

		if(isSaved){
			this.getStudents();
		}
	}

	async editStudent(student: any){
		const dialogRef = this.dialog.open(EditCreateStudentComponent, {
			data : student,
			maxWidth: "1200px",
			autoFocus : false
		});

		let isSaved = await dialogRef.afterClosed().toPromise();

		if(isSaved){
			this.getStudents();
		}
	}

	async deleteStudent(student: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Deletando esse estudante você não será mais capaz de acessar seus dados. Deseja continuar?'
      },
      maxWidth: "360px",
      autoFocus : false,
      panelClass: 'delete-button'
    });

    let result = await dialogRef.afterClosed().toPromise();

    if(result) {
      this.loading = true;
      let deleted: any = await this.studentsService.deleteStudent(student.matricula);

      if(deleted) {
        this.getStudents();
      }
    }
  }

}
