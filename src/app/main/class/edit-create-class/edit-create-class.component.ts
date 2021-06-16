import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ClassService } from '../class.service';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-create-class',
  templateUrl: './edit-create-class.component.html',
  styleUrls: ['./edit-create-class.component.scss']
})
export class EditCreateClassComponent implements OnInit {

	classForm!: FormGroup;
	loading: boolean = false;
	loadingSpinner: boolean = false;
	isEditing: boolean = false;

  constructor(
		public dialogRef: MatDialogRef<EditCreateClassComponent>,
		@Inject(MAT_DIALOG_DATA) public classData: any,
		private classService: ClassService
	) { }

  ngOnInit(): void {
		this.classForm = new FormGroup({
      numero : new FormControl('', [Validators.required]),
      inicioTurma : new FormControl('', [Validators.required]),
      fimTurma : new FormControl('', [Validators.required]),
      codigo : new FormControl('')
    });

		if(this.classData?.numero) {
			this.isEditing = true;
			this.classForm.setValue(this.classService.classToForm(this.classData))
		}
  }

	async save() {
		let savedClass;
    if(!this.classForm.valid) {
      this.classForm.markAllAsTouched();
      return;
    }

    this.loadingSpinner = true;
		let inicioTurma = moment(this.classForm.get('inicioTurma')?.value).format('DD/MM/YYYY');
		let fimTurma = moment(this.classForm.get('fimTurma')?.value).format('DD/MM/YYYY');

		if(this.isEditing) {
			savedClass = await this.classService.updateClass({...this.classForm.value, inicioTurma, fimTurma});
		}
		else {
			savedClass = await this.classService.createClass({...this.classForm.value, inicioTurma, fimTurma});
		}
    this.loadingSpinner = false;

    this.dialogRef.close(savedClass);
  }

	cancel() {
    this.dialogRef.close(false);
  }

}

