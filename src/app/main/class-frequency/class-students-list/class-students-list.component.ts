import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-students-list',
  templateUrl: './class-students-list.component.html',
  styleUrls: ['./class-students-list.component.scss']
})
export class ClassStudentsListComponent implements OnInit {

  dataSource: any = []
  loading: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
