import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassService } from '../../class/class.service';
import { StudentsService } from '../../students/students.service';

@Component({
  selector: 'app-enrollment-declaration',
  templateUrl: './enrollment-declaration.component.html',
  styleUrls: ['./enrollment-declaration.component.scss']
})
export class EnrollmentDeclarationComponent implements OnInit {

  classData: any;
  studentId: any;
  studentData: any;
  today: any;
  constructor(private route: ActivatedRoute, private studentsService: StudentsService, private classService: ClassService ) { 
    this.route.paramMap.subscribe( paramMap => {
      this.studentId = paramMap.get('studentId');
  	});
  }

  async ngOnInit(){
    this.studentData = await this.studentsService.getStudentById(this.studentId);
    this.classData = await this.classService.getClassById(this.studentData.numeroTurma);
    this.today = new Date();
  }

}
