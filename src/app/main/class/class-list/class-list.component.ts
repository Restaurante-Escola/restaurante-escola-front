import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EditCreateClassComponent } from '../edit-create-class/edit-create-class.component';
import { ClassService } from '../class.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

	displayedColumns: any = []
  dataSource: any = [];
  loading: boolean = true;
  class: any = [];

  constructor(
    private classService: ClassService, 
    public dialog: MatDialog,     
    private router: Router,
		private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

	ngAfterViewInit(){
		this.getClass();
	}

	async getClass(){
		this.loading = true;
		this.class = await this.classService.getClasses();
		this.dataSource = new MatTableDataSource(this.class);
		this.displayedColumns = ['icon', 'name', 'date'];
		this.loading = false;
  }

	async createClass(){
		const dialogRef = this.dialog.open(EditCreateClassComponent, {
			maxWidth: "1200px",
			autoFocus : false
		});

		let isSaved = await dialogRef.afterClosed().toPromise();

		if(isSaved){
			this.getClass();
		}
	}

	async editClass(classData: any){
    console.log('clasData', classData)
		const dialogRef = this.dialog.open(EditCreateClassComponent, {
			data : classData,
			maxWidth: "1200px",
			autoFocus : false
		});

		let isSaved = await dialogRef.afterClosed().toPromise();

		if(isSaved){
			this.getClass();
		}
	}

	async deleteClass(classToDelete: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Deletando essa turma você não será mais capaz de acessar seus dados. Deseja continuar?'
      },
      maxWidth: "360px",
      autoFocus : false,
      panelClass: 'delete-button'
    });

    let result = await dialogRef.afterClosed().toPromise();

    if(result) {
      this.loading = true;
      let deleted: any = await this.classService.deleteClass(classToDelete.numero);

      if(deleted) {
				this._snackBar.open('Turma deletada com sucesso!', '', {
					duration: 6000,
					verticalPosition: "top",
					horizontalPosition: "right",
					panelClass: 'snack-bar-success'
				});
        this.getClass();
      }
    }
  }

  async listStudents(classData: any) {
    console.log('class', classData)
    this.router.navigateByUrl(`/alunos/${classData.numero}`);
  }
}
