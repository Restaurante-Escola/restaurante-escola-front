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

	async createStudent(student: any) {
    let response: any = await this.httpClient.post(`${environment.api_url}/alunos`, student).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

	async updateStudent(student: any) {
    let response: any = await this.httpClient.put(`${environment.api_url}/alunos/${student.matricula}`, student).toPromise();
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

	studentToForm(student: any){
		let formStudent = {
			nome: student.nome,
      nomeSocial: student.nomeSocial,
      idade: student.idade,
      estadoCivil: student.estadoCivil,
      dataNascimento: moment(student.dataNascimento).format("DD/MM/YYYY"),
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
			matricula: student.matricula
    };

    return formStudent;
	}
}
