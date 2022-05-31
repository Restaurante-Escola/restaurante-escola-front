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
  constructor(private route: ActivatedRoute, private studentsService: StudentsService ) { 
    this.route.paramMap.subscribe( paramMap => {
      this.studentId = paramMap.get('studentId');
  	});
  }

  async ngOnInit(){
    this.studentData = await this.studentsService.getStudentById(this.studentId);
    console.log(
      this.studentId,
      this.studentData
    );
    
  }

}
