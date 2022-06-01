import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentDeclarationComponent } from './enrollment-declaration.component';

describe('EnrollmentDeclarationComponent', () => {
  let component: EnrollmentDeclarationComponent;
  let fixture: ComponentFixture<EnrollmentDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentDeclarationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollmentDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
