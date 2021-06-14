import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StudentsService } from '../students.service';
import * as moment from 'moment';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-occurence-advertence',
  templateUrl: './occurence-advertence.component.html',
  styleUrls: ['./occurence-advertence.component.scss']
})
export class OccurenceAdvertenceComponent implements OnInit {

	context: any;
	student: any;
	form!: FormGroup;
	documents: any;

  constructor(
		public dialogRef: MatDialogRef<OccurenceAdvertenceComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialog: MatDialog,
		private studentsService: StudentsService
	) { 
		if(data.context) {
			this.context = data.context;
		}

		if(data.student) {
			this.student = data.student;
		}
	}

  ngOnInit() {
		this.form = new FormGroup({
      data: new FormControl('', [Validators.required]),
			descricao: new FormControl('', [Validators.required])
    });

		console.log("context", this.context);

		this.getDocuments();
  }

	async getDocuments(){
		if(this.context == 'advertence') {
			this.documents = await this.studentsService.getAdvertences(this.student.matricula);
		}
		else {
			this.documents = await this.studentsService.getOccurences(this.student.matricula);
		}

		this.documents.map((document: any) =>{
			document.data = moment(document.data).format();
		})
	}

	async save() {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

		this.form.get('data')?.setValue(moment(this.form.get('data')?.value).format('DD/MM/YYYY'))

		if(this.context == 'advertence') {
			await this.studentsService.saveAdvertence({matricula: this.student.matricula, ...this.form.value});
		}
		else {
			await this.studentsService.saveOccurence({matricula: this.student.matricula, ...this.form.value});
		}

		this.form.reset();

		this.getDocuments();
  }

	async deleteDocument(document: any){
		const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: `Deletando essa ${this.context == 'advertence' ? 'advertência' : 'ocorrência'} você não será mais capaz de acessar seus dados. Deseja continuar?`
      },
      maxWidth: "360px",
      autoFocus : false,
      panelClass: 'delete-button'
    });

    let result = await dialogRef.afterClosed().toPromise();

    if(result) {
			if(this.context == 'advertence') {
				await this.studentsService.deleteAdvertence(document.codigo);
			}
			else {
				await this.studentsService.deleteOccurence(document.codigo);
			}

			this.getDocuments();
    }
	}

}
