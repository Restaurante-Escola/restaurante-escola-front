import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-occurence',
  templateUrl: './occurence.component.html',
  styleUrls: ['./occurence.component.scss']
})
export class OccurenceComponent implements OnInit {

  constructor(
		public dialogRef: MatDialogRef<OccurenceComponent>,
		@Inject(MAT_DIALOG_DATA) public student: any,
		private studentsService: StudentsService
	) { }

  ngOnInit(): void {
  }

}
