import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
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
  @ViewChild('inputDatePicker') inputDatePicker!: ElementRef

  dataSource: any[] = []
  displayedColumns: any = []
  loading: boolean = true

  headerForm!: FormGroup

  disableRegistrar: boolean = false
  isEditing: boolean = false

  constructor(
    private classFrequencyService: ClassFrequencyService
  ) { }

  ngOnInit(): void {
    this.montarFormulario()
  }

  montarFormulario() {
    this.headerForm = new FormGroup({
      turma: new FormControl('', Validators.required),
      data: new FormControl(null, Validators.required),
    })
  }

  get turma() {
    return this.headerForm.get('turma')
  }

  get data() {
    return this.headerForm.get('data')
  }

  consultarFrequencias() {
    if (this.headerForm.valid) {
      this.loading = true
      const data = this.adjustData()
      this.getFrequencias(this.headerForm.controls.turma?.value.numero, data)
    }
  }

  getAlunosByTurma() {
    this.classFrequencyService.getAlunosByTurmaNumero(this.turma?.value.numero).subscribe(
      (response: any) => {
        this.setupTable(response)
      },
      (error) => {
        console.error(error)
      }
    )
  }

  getFrequencias(nrTurma: number, data: string) {
    this.classFrequencyService.getFrequenciaByTurmaDate(nrTurma, data).subscribe(
      (response: any) => {
        this.isEditing = true
        this.setupTable(response)
        this.dataSource = this.dataSource.map((aluno) => {
          aluno = { ...aluno, ...aluno.alunoDto }
          aluno.firstChecked = false
          aluno.secondChecked = false
          return aluno
        })
        this.checkCheckboxes()
      },
      (error) => {
        if (error.status == 404){
          this.getAlunosByTurma()
          this.isEditing = false
        }
        else
          console.error(error)
      }
    )
  }

  setupTable(response: any[]) {
    this.dataSource = response
    this.dataSource = this.dataSource.map((aluno) => { 
      aluno.firstChecked = false
      aluno.secondChecked = false
      return aluno
    })
    this.displayedColumns = ['icon', 'name', 'matricula', 'numeroFaltas'];
    this.loading = false
    this.disableRegistrar = false
  }

  registrarPresencas() {
    this.disableRegistrar = true
    this.dataSource.forEach((aluno) => {
      aluno.status = this.getAlunoStatus(aluno)

      this.registrarFrequenciaAluno(aluno.matricula, aluno.status, aluno?.codigo)
    })
  }

  registrarFrequenciaAluno(matricula: number, status: string, codigo: number) {
    if (!this.isEditing)
      this.classFrequencyService.postRegistrarFrequenciaByAluno(matricula, this.turma?.value.numero, this.adjustData(), status).subscribe(
        () => {},
        (error) => {
          console.error(error)
        }
      )
    else
      this.classFrequencyService.putFrequenciaByAluno(codigo, matricula, this.turma?.value.numero, this.adjustData(), status).subscribe(
        () => {},
        (error) => {
          console.error(error)
        }
      )
  }

  checkCheckboxes() {
    this.dataSource.forEach((aluno) => {
      if (aluno.status == StatusFrequencia[2]) {
        aluno.firstChecked = true
        aluno.secondChecked = true
      }
      else if (aluno.status == StatusFrequencia[1]) {
        aluno.firstChecked = true
      }
    })
  }

  getAlunoStatus(aluno: any): string {
    if (aluno.firstChecked && aluno.secondChecked) {
      return StatusFrequencia[2]
    }
    else if (aluno.firstChecked || aluno.secondChecked) {
      return StatusFrequencia[1]
    }
    else {
      return StatusFrequencia[0]
    }
  }
 
  onCheckboxChecked(selectedAluno: any, event: boolean, checkboxNumber: number) {
    if (checkboxNumber === 1) {
      this.dataSource[this.dataSource.findIndex((aluno) => aluno.nome == selectedAluno.nome)].firstChecked = event
    }
    else {
      this.dataSource[this.dataSource.findIndex((aluno) => aluno.nome == selectedAluno.nome)].secondChecked = event
    }
  }

  adjustData(): string {
    console.log(this.inputDatePicker.nativeElement.value)
    return this.inputDatePicker.nativeElement.value
  }
}
