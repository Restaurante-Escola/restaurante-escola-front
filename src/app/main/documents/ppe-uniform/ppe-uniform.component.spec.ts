import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPEUniformComponent } from './ppe-uniform.component';

describe('PPEUniformComponent', () => {
  let component: PPEUniformComponent;
  let fixture: ComponentFixture<PPEUniformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPEUniformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPEUniformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
