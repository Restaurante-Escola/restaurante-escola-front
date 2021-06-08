import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStudentsListComponent } from './class-students-list.component';

describe('ClassStudentsListComponent', () => {
  let component: ClassStudentsListComponent;
  let fixture: ComponentFixture<ClassStudentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassStudentsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
