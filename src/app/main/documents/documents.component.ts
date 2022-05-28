import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../students/students.service';
import { DocumentsService } from './documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  Students: any = [];

  constructor(private studentsService: StudentsService) { }

  async ngOnInit() {
    this.Students = await this.studentsService.getStudents();
  }
}
