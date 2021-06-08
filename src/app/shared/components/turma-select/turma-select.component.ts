import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TurmaSelectService } from '../../services/turma-select.service';

@Component({
  selector: 'app-turma-select',
  templateUrl: './turma-select.component.html',
  styleUrls: ['./turma-select.component.scss']
})
export class TurmaSelectComponent implements OnInit {

  @Input() label: string = "Escolha uma turma"
  @Input() errorMessage: string = "Campo obrigatório"
  @Input() formControl: FormControl = new FormControl()
  @Input() turmas: any

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
        console.log(this.turmas);
      }
    )
  }

  handleTurmas(turmas: []) {
    console.log(turmas);
    return turmas.map((turma: any) => ({
      name: `Turma ${turma.codigo} - ${turma.inicioTurma.split('-')[0]}`,
      ...turma,
    }))
  }

}
