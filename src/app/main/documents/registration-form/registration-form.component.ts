import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students/students.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  studentId: any;
  studentData: any;
  year: any;
  month: any;
  day: any;
  constructor(private route: ActivatedRoute, private studentsService: StudentsService ) { 
    this.route.paramMap.subscribe( paramMap => {
      this.studentId = paramMap.get('studentId');
  	});
  }

  async ngOnInit(){
    this.studentData = await this.studentsService.getStudentById(this.studentId);
    let date: Date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDay();
    if(this.month == 1){
      this.month = 'Janeiro';
    }
    if(this.month == 2){
      this.month = 'Fevereiro';
    }
    if(this.month == 3){
      this.month = 'Março';
    }
    if(this.month == 4){
      this.month = 'Abril';
    }
    if(this.month == 5){
      this.month = 'Maio';
    }
    if(this.month == 6){
      this.month = 'Junho';
    }
    if(this.month == 7){
      this.month = 'Julho';
    }
    if(this.month == 8){
      this.month = 'Agosto';
    }
    if(this.month == 9){
      this.month = 'Setembro';
    }
    if(this.month == 10){
      this.month = 'Outubro';
    }
    if(this.month == 11){
      this.month == 'Novembro';
    }
    if(this.month == 12){
      this.month = 'Dezembro';
    }
    console.log(
      this.studentId,
      this.studentData
    );
    
  }

}
