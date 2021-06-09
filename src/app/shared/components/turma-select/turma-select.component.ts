import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { TurmaSelectService } from '../../services/turma-select.service';

@Component({
  selector: 'app-turma-select',
  templateUrl: './turma-select.component.html',
  styleUrls: ['./turma-select.component.scss']
})
export class TurmaSelectComponent implements OnInit {

  @Input() label: string = "Escolha uma turma"
  @Input() errorMessage: string = "Campo obrigatório"
  @Input() parentForm!: FormGroup
  @Input() controlName: string = ''

  turmas: any[] = []

  get form() {
    return this.parentForm.get(this.controlName) as FormControl
  }

  constructor(
    private turmaSelectService: TurmaSelectService
  ) { }

  ngOnInit(): void {
    this.getTurmas()
  }

  getTurmas() {
    this.turmaSelectService.getTurmasByName().subscribe(
      (response : any) => {
        this.turmas = this.handleTurmas(response)
        this.turmas.sort((a, b) => {
          return a.numero - b.numero
        })
      }
    )
  }

  handleTurmas(turmas: any[]) {
    return turmas.map((turma: any) => ({
      name: `Turma ${turma.numero} - ${turma.inicioTurma.split('-')[0]}`,
      ...turma,
    }))
  }

}
