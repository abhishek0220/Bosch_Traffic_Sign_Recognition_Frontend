import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisclassifiedComponent } from './misclassified.component';

describe('MisclassifiedComponent', () => {
  let component: MisclassifiedComponent;
  let fixture: ComponentFixture<MisclassifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisclassifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisclassifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
