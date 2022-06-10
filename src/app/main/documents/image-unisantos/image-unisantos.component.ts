import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../students/students.service';

@Component({
  selector: 'app-image-unisantos',
  templateUrl: './image-unisantos.component.html',
  styleUrls: ['./image-unisantos.component.scss']
})
export class ImageUnisantosComponent implements OnInit {

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
    console.log(
      this.studentId,
      this.studentData,
    );
    
  }

}
