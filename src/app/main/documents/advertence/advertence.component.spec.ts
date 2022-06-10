import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenceComponent } from './advertence.component';

describe('AdvertenceComponent', () => {
  let component: AdvertenceComponent;
  let fixture: ComponentFixture<AdvertenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvertenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
