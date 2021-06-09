import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import * as moment from 'moment';
import { ClassFrequencyService } from '../class-frequency.service';

enum StatusFrequencia {
  "INTEGRAL",
  "MEIA",
  "FALTA",
}

@Component({
  selector: 'app-class-students-list',
  templateUrl: './class-students-list.component.html',
  styleUrls: ['./class-students-list.component.scss']
})
export class ClassStudentsListComponent implements OnInit {
  @ViewChild('firstCheckbox') firstCheckbox!: MatCheckbox
  @ViewChild('secondCheckbox') secondCheckbox!: MatCheckbox

  dataSource: any[] = []
  displayedColumns: any = []
  loading: boolean = true

  headerForm!: FormGroup

  disableRegistrar: boolean = false

  constructor(
    private classFrequencyService: ClassFrequencyService
  ) { }

  ngOnInit(): void {
    this.montarFormulario()
    this.formObserver()
  }

  montarFormulario() {
    this.headerForm = new FormGroup({
      turma: new FormControl('', Validators.required),
      data: new FormControl(null, Validators.required),
    }, { updateOn: 'blur' })
  }

  get turma() {
    return this.headerForm.get('turma')
  }

  get data() {
    return this.headerForm.get('data')
  }

  formObserver() {
    this.headerForm.valueChanges.subscribe((changes) => {
      if (this.headerForm.valid) {
        this.adjustData()
        this.getAlunosByTurma()
      }
    })
  }

  getAlunosByTurma() {
    this.classFrequencyService.getAlunosByTurmaNumero(this.turma?.value.numero).subscribe(
      (response: any) => {
        this.dataSource = response
        this.dataSource = this.dataSource.map((aluno) => { 
          aluno.firstChecked = false
          aluno.secondChecked = false
          return aluno
        })
        this.displayedColumns = ['icon', 'name'];
        this.loading = false
        
        // this.getFrequencias()
      },
      (error) => {
        console.error(error)
      }
    )
  }

  // getFrequencias(): boolean {
  //   this.classFrequencyService.getFrequenciaByTurmaDate(this.turma?.value.numero, "09/06/2021").subscribe(
  //     (response) => {
  //       this.disableRegistrar = false
  //       return true
  //     },
  //     (error) => {
  //       console.error(error)
  //     }
  //   )
  //   return false
  // }

  registrarPresencas() {
    this.dataSource.forEach((aluno) => {
      if (aluno.firstChecked && aluno.secondChecked) {
        aluno.status = StatusFrequencia[2]
      }
      else if (aluno.firstChecked || aluno.secondChecked) {
        aluno.status = StatusFrequencia[1]
      }
      else {
        aluno.status = StatusFrequencia[0]
      }

      // this.registrarFrequenciaAluno(aluno.matricula, aluno.status)
    })
  }

  registrarFrequenciaAluno(matricula: number, status: string) {
    this.classFrequencyService.postRegistrarFrequenciaByAluno(matricula, this.turma?.value.numero, "09/06/2021", status)
  }
 
  onCheckboxChecked(selectedAluno: any, event: boolean, checkboxNumber: number) {
    if (checkboxNumber === 1) {
      this.dataSource[this.dataSource.findIndex((aluno) => aluno.nome == selectedAluno.nome)].firstChecked = event
    }
    else {
      this.dataSource[this.dataSource.findIndex((aluno) => aluno.nome == selectedAluno.nome)].secondChecked = event
    }
  }

  adjustData() {
    console.log(moment(this.data?.value).day());
    
  }
}
