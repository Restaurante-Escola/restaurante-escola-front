import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students/students.service';

@Component({
  selector: 'app-enrollment-declaration',
  templateUrl: './enrollment-declaration.component.html',
  styleUrls: ['./enrollment-declaration.component.scss']
})
export class EnrollmentDeclarationComponent implements OnInit {

  studentId: any;
  studentData: any;
  today: any;
  constructor(private route: ActivatedRoute, private studentsService: StudentsService ) { 
    this.route.paramMap.subscribe( paramMap => {
      this.studentId = paramMap.get('studentId');
  	});
  }

  async ngOnInit(){
    this.studentData = await this.studentsService.getStudentById(this.studentId);
    let date: Date = new Date();
    this.today =  date;
    console.log(
      this.studentId,
      this.studentData,
      this.today
    );
    
  }

}
