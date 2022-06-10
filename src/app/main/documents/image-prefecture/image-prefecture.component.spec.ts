import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePrefectureComponent } from './image-prefecture.component';

describe('ImagePrefectureComponent', () => {
  let component: ImagePrefectureComponent;
  let fixture: ComponentFixture<ImagePrefectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePrefectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePrefectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
