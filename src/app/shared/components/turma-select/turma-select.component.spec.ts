import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurmaSelectComponent } from './turma-select.component';

describe('TurmaSelectComponent', () => {
  let component: TurmaSelectComponent;
  let fixture: ComponentFixture<TurmaSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurmaSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmaSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
