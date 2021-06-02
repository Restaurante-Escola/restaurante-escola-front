import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-create-student',
  templateUrl: './edit-create-student.component.html',
  styleUrls: ['./edit-create-student.component.scss']
})
export class EditCreateStudentComponent implements OnInit {

  constructor(
		public dialogRef: MatDialogRef<EditCreateStudentComponent>,
		@Inject(MAT_DIALOG_DATA) public student: any
	) { }

  ngOnInit(): void {
  }

}

