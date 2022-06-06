import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissalComponent } from './dismissal.component';

describe('DismissalComponent', () => {
  let component: DismissalComponent;
  let fixture: ComponentFixture<DismissalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DismissalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
