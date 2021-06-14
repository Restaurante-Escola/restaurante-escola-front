import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassFrequencyService {

  constructor(
    private httpClient: HttpClient
  ) { }
 
  getAlunosByTurmaNumero(numeroTurma: number) {
    return this.httpClient.get(`${environment.api_url}/turmas/alunos/` + numeroTurma)
  }

  getFrequenciaByTurmaDate(numeroTurma: number, data: string) {
    return this.httpClient.get(`${environment.api_url}/frequencias/data?numeroTurma=${numeroTurma}&data=${data}`)
  }

  postRegistrarFrequenciaByAluno(matricula: number, numeroTurma: number, dataAula: string, status: string) {
    return this.httpClient.post(`${environment.api_url}/frequencias`, {
      matricula, numeroTurma, dataAula, status
    })
  }

  putFrequenciaByAluno(codigo: number, matricula: number, numeroTurma: number, dataAula: string, status: string) {
    return this.httpClient.put(`${environment.api_url}/frequencias/${codigo}`, {
      matricula, numeroTurma, dataAula, status
    })
  }
}
