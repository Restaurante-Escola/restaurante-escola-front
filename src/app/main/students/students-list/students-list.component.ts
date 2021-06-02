import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EditCreateStudentComponent } from '../edit-create-student/edit-create-student.component';
import { StudentsService } from '../students.service';
import { MatDialog } from '@angular/material/dialog';

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
		this.displayedColumns = ['name', 'cpf', 'years', 'class', 'email', 'cellphone'];
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

}
