import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StudentsService } from '../students.service';
import * as moment from 'moment';
@Component({
  selector: 'app-edit-create-student',
  templateUrl: './edit-create-student.component.html',
  styleUrls: ['./edit-create-student.component.scss']
})
export class EditCreateStudentComponent implements OnInit {

	studentForm!: FormGroup;
	studentClone: any = {};
	loadingSpinner: boolean = false;
	isEditing: boolean = false;

	escolaridades: any = [
		'Ensino fundamental',
		'Ensino médio'
	]

	escolaridadeGraus: any = [
		'Completo',
		'Cursando',
	]

	servicosAtendimento: any = [
		'CRAS',
		'CREAS',
		'Centro Comunitário'
	]

  constructor(
		public dialogRef: MatDialogRef<EditCreateStudentComponent>,
		@Inject(MAT_DIALOG_DATA) public student: any,
		private studentsService: StudentsService
	) { }

  ngOnInit(): void {
		this.studentForm = new FormGroup({
      nome : new FormControl('', [Validators.required]),
      nomeSocial : new FormControl(''),
      idade : new FormControl(''),
      estadoCivil : new FormControl(''),
      dataNascimento : new FormControl(''),
      rg : new FormControl(''),
      cpf : new FormControl(''),
      telefoneCelular : new FormControl(''),
      numeroWhatsapp : new FormControl(''),
      telefoneRecado : new FormControl(''),
      nomePessoaTelefoneRecado : new FormControl(''),
      endereco : new FormControl(''),
      email : new FormControl(''),
      nomeResponsavel : new FormControl(''),
      escolaridade : new FormControl(''),
			escolaridadeGrau: new FormControl(''),
      escola : new FormControl(''),
      anoFormacao : new FormControl(''),
      camiseta : new FormControl(''),
      sapato : new FormControl(''),
      servicoAtendimento : new FormControl(''),
      unidade : new FormControl(''),
      tecnico : new FormControl(''),
      telefoneTecnico : new FormControl(''),
			alergia: new FormControl(false),
			alergiaAlimento: new FormControl(false),
			alergiaOutros: new FormControl(false),
			alergiaRemedio: new FormControl(false),
			especificacaoAlergia: new FormControl(''),
			hipertensao: new FormControl(false),
			hipotensao: new FormControl(false),
			epilepsia: new FormControl(false),
			diabetes: new FormControl(false),
			problemaRenal: new FormControl(false),
			problemaOcular: new FormControl(false),
			problemaRespiratorio: new FormControl(false),
			fumante: new FormControl(false),
			medicamentosUsoContinuo: new FormControl(''),
			observacao: new FormControl(''),
			matricula: new FormControl(''),
			turma: new FormControl(''),
    });

		if(this.student?.nome) {
			this.isEditing = true;
			this.studentForm.setValue(this.studentsService.studentToForm(this.student))
			Object.assign(this.studentClone, this.studentForm.value);
		}
  }

	async save() {
    if(!this.studentForm.valid) {
      this.studentForm.markAllAsTouched();
      return;
    }

		let studentData: any = this.studentForm.value
		delete studentData.turma;

    this.loadingSpinner = true;
		if(this.isEditing) {
			await this.studentsService.updateStudent({...studentData, dataNascimento: moment(studentData.dataNascimento).format('DD/MM/YYYY')});
			// if(this.studentClone.turma != this.studentForm.get('turma')?.value) {
			// 	await this.studentsService.addStudentToClass({matricula: studentData.matricula, numeroTurma: this.studentForm.get('turma')?.value});
			// }
		}
		else {
			await this.studentsService.createStudent({...studentData, dataNascimento: moment(studentData.dataNascimento).format('DD/MM/YYYY')})
			await this.studentsService.addStudentToClass({matricula: studentData.matricula, numeroTurma: this.studentForm.get('turma')?.value});
		}
    this.loadingSpinner = false;

    this.dialogRef.close(studentData);
  }

	cancel() {
    this.dialogRef.close(false);
  }

}

