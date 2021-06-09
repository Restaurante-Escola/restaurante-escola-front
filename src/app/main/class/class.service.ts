import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }

	async getClasses() {
    let response: any = await this.httpClient.get(`${environment.api_url}/turmas`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
  }

  async deleteClass(codigo: any) {
    let response: any = await this.httpClient.delete(`${environment.api_url}/turmas/${codigo}`).toPromise();
    return response || []; //TODO throw exception when the statusCode it's not 200 or the response is null
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
