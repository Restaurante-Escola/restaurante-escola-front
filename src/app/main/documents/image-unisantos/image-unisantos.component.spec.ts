import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUnisantosComponent } from './image-unisantos.component';

describe('ImageUnisantosComponent', () => {
  let component: ImageUnisantosComponent;
  let fixture: ComponentFixture<ImageUnisantosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageUnisantosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUnisantosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
