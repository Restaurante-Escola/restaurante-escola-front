import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { StudentsService } from '../students/students.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})

export class DocumentsComponent implements OnInit {

  Students: any = [];
  docs: any = [
    {label:'Ficha Cadastral', value: "ficha-cadastral"},
    {label:'Declaração de Matrícula', value: 'declaracao-matricula'},
    {label:'Imagem Prefeitura', value:"imagem-prefeitura"},
    {label:'Desligamento', value:"desligamento"},
    {label:'Imagem Unisantos', value:"imagem-unisantos"},
    {label:'Advertencia', value:"advertencia" },
    {label:'EPI/Uniforme', value:"epi-uniforme" },
    {label:'Conclusão', value: "conclusao"},
  ];
  selectedValue: any;
  form!: FormGroup;
  
  

  constructor(private studentsService: StudentsService, private router: Router) { 
    this.form = new FormGroup({
    student : new FormControl(''),
    document : new FormControl(''),
  });}

  async ngOnInit() {
    this.Students = await this.studentsService.getStudents(); 
  }

  async createDocument(){
    this.router.navigate([`${this.form.get("document")?.value}/${this.form.get("student")?.value}`])
  }
}
