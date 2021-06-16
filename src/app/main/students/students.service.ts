import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

	async getStudents() {
    let response: any = await this.httpClient.get(`${environment.api_url}/alunos`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async createStudent(studentData: any) {
    let response: any = await this.httpClient.post(`${environment.api_url}/alunos`, studentData).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async updateStudent(studentData: any) {
    let response: any = await this.httpClient.put(`${environment.api_url}/alunos/${studentData.matricula}`, studentData).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async deleteStudent(matricula: any) {
    let response: any = await this.httpClient.delete(`${environment.api_url}/alunos/${matricula}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

  async getStudentsFromClass(classCode: any) {
    let response: any = await this.httpClient.get(`${environment.api_url}/turmas/alunos/${classCode}`).toPromise();
    return response || [];
  }
	async addStudentToClass(studentData: Object) {
    let response: any = await this.httpClient.post(`${environment.api_url}/turmas/cadastrar-alunos`, studentData).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async getAdvertences(studentData: any) {
    let response: any = await this.httpClient.get(`${environment.api_url}/advertencias/aluno/${studentData}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async saveAdvertence(advertence: any) {
    let response: any = await this.httpClient.post(`${environment.api_url}/advertencias`, advertence).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async deleteAdvertence(codigo: any) {
    let response: any = await this.httpClient.delete(`${environment.api_url}/advertencias/${codigo}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async getOccurences(studentData: any) {
    let response: any = await this.httpClient.get(`${environment.api_url}/ocorrencias/aluno/${studentData}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async saveOccurence(occurence: any) {
    let response: any = await this.httpClient.post(`${environment.api_url}/ocorrencias`, occurence).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async deleteOccurence(codigo: any) {
    let response: any = await this.httpClient.delete(`${environment.api_url}/ocorrencias/${codigo}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	studentToForm(student: any){
		let formStudent = {
			nome: student.nome,
      nomeSocial: student.nomeSocial,
      idade: student.idade,
      estadoCivil: student.estadoCivil,
      dataNascimento: moment(student.dataNascimento).format(),
      rg: student.rg,
      cpf: student.cpf,
      telefoneCelular: student.telefoneCelular,
      numeroWhatsapp: student.numeroWhatsapp,
      telefoneRecado: student.telefoneRecado,
      nomePessoaTelefoneRecado: student.nomePessoaTelefoneRecado,
      endereco: student.endereco,
      email: student.email,
      nomeResponsavel: student.nomeResponsavel,
      escolaridade: student.escolaridade,
			escolaridadeGrau: student.escolaridadeGrau ? student.escolaridadeGrau : '',
      escola: student.escola ? student.escola : '',
      anoFormacao: student.anoFormacao ? student.anoFormacao : '',
      camiseta: student.camiseta,
      sapato: student.sapato,
      servicoAtendimento: student.servicoAtendimento,
      unidade: student.unidade,
      tecnico: student.tecnico,
      telefoneTecnico: student.telefoneTecnico,
			alergia: student.alergia,
			alergiaAlimento: student.alergiaAlimento,
			alergiaOutros: student.alergiaOutros,
			alergiaRemedio: student.alergiaRemedio,
			especificacaoAlergia: student.especificacaoAlergia,
			hipertensao: student.hipertensao,
			hipotensao: student.hipotensao,
			epilepsia: student.epilepsia,
			diabetes: student.diabetes,
			problemaRenal: student.problemaRenal,
			problemaOcular: student.problemaOcular,
			problemaRespiratorio: student.problemaRespiratorio,
			fumante: student.fumante,
			medicamentosUsoContinuo: student.medicamentosUsoContinuo,
			observacao: student.observacao,
			matricula: student.matricula,
			turma: student.numeroTurma
    };

    return formStudent;
	}
}
