import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateClassComponent } from './edit-create-class.component';

describe('EditCreateStudentComponent', () => {
  let component: EditCreateClassComponent;
  let fixture: ComponentFixture<EditCreateClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreateClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
