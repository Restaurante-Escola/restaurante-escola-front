import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

interface Aluno {
  name: string;
  CPF: string;
}
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  students: Aluno[] = [
    {name: 'Edu', CPF: '47046209804'},
    {name: 'Pablo', CPF: '58789632558'},
    {name: 'Douglas', CPF: '02687499639'},
  ];

}
