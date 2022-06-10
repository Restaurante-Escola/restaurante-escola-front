import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students/students.service';

@Component({
  selector: 'app-image-prefecture',
  templateUrl: './image-prefecture.component.html',
  styleUrls: ['./image-prefecture.component.scss']
})
export class ImagePrefectureComponent implements OnInit {

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
    this.today = new Date();
    
  }

}
