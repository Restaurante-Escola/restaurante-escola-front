import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EditCreateClassComponent } from '../edit-create-class/edit-create-class.component';
import { ClassService } from '../class.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

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

  constructor(private classService: ClassService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

	ngAfterViewInit(){
		this.getClass();
	}

	async getClass(){
		this.loading = true;
		this.class = await this.classService.getClasses();
		this.dataSource = new MatTableDataSource(this.class);
		this.displayedColumns = ['icon', 'name', 'date', 'numberOfStudents'];
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
      let deleted: any = await this.classService.deleteClass(classToDelete.codigo);

      if(deleted) {
        this.getClass();
      }
    }
  }

}
