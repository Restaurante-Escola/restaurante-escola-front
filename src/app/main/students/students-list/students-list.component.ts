import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EditCreateStudentComponent } from '../edit-create-student/edit-create-student.component';
import { StudentsService } from '../students.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { OccurenceAdvertenceComponent } from '../occurence-advertence/occurence-advertence.component';
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
  classNumber: any;

  constructor(private studentsService: StudentsService, public dialog: MatDialog,  private _snackBar: MatSnackBar, public route: ActivatedRoute) { 
    this.route.paramMap.subscribe( paramMap => {
      this.classNumber = paramMap.get('numeroTurma');
  	});
  }

  ngOnInit(): void {
  }

	ngAfterViewInit(){
		this.getStudents();
	}

	async getStudents(){
		this.loading = true;
		this.students = await this.studentsService.getStudents();
    if(this.classNumber) {
      console.log('with code', this.classNumber)
      this.students = this.students.filter((student: any) => student.numeroTurma == this.classNumber);
    }
		console.log("x", this.students, this.classNumber);
		this.dataSource = new MatTableDataSource(this.students);
		this.displayedColumns = ['icon', 'name', 'cpf', 'class', 'email', 'cellphone'];
		this.loading = false;
  	}

	async studentAdvertence(student: any){
		const dialogRef = this.dialog.open(OccurenceAdvertenceComponent, {
			data : {
				student,
				context: 'advertence'
			},
			maxWidth: "1200px",
			autoFocus : false
		});

		let isSaved = await dialogRef.afterClosed().toPromise();

		if(isSaved){
			this.getStudents();
		}
	}

	async studentOccurrence(student: any){
		const dialogRef = this.dialog.open(OccurenceAdvertenceComponent, {
			data : {
				student,
				context: 'occurence'
			},
			maxWidth: "1200px",
			autoFocus : false
		});

		let isSaved = await dialogRef.afterClosed().toPromise();

		if(isSaved){
			this.getStudents();
		}
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
				this._snackBar.open('Aluno deletado com sucesso', '', {
					duration: 6000,
					verticalPosition: "top",
					horizontalPosition: "right",
					panelClass: 'snack-bar-success'
				});
        this.getStudents();
      }
    }
  }

}
