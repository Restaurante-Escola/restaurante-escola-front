import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-edit-create-student',
  templateUrl: './edit-create-student.component.html',
  styleUrls: ['./edit-create-student.component.scss']
})
export class EditCreateStudentComponent implements OnInit {

	studentForm!: FormGroup;
	loading: boolean = false;
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
			matricula: new FormControl(99999)
    });

		if(this.student?.nome) {
			this.isEditing = true;
			this.studentForm.setValue(this.studentsService.studentToForm(this.student))
		}
  }

	async save() {
		let savedStudent;
    if(!this.studentForm.valid) {
      this.studentForm.markAllAsTouched();
      return;
    }

    this.loadingSpinner = true;
		if(this.isEditing) {
			savedStudent = await this.studentsService.updateStudent(this.studentForm.value)
		}
		else {
			savedStudent = await this.studentsService.createStudent(this.studentForm.value)
		}
    this.loadingSpinner = false;

    this.dialogRef.close(savedStudent);
  }

	cancel() {
    this.dialogRef.close(false);
  }

}

