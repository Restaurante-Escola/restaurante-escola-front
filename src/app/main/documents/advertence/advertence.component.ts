import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students/students.service';

@Component({
  selector: 'app-advertence',
  templateUrl: './advertence.component.html',
  styleUrls: ['./advertence.component.scss']
})
export class AdvertenceComponent implements OnInit {
  
  studentAdvertences: any;
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
    this.studentAdvertences = await this.studentsService.getAdvertences(this.studentId);
    this.today = new Date();  
  }

}
