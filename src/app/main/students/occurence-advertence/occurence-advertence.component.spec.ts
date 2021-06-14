import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurenceAdvertenceComponent } from './occurence-advertence.component';

describe('OccurenceAdvertenceComponent', () => {
  let component: OccurenceAdvertenceComponent;
  let fixture: ComponentFixture<OccurenceAdvertenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccurenceAdvertenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurenceAdvertenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
