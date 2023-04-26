import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Complaint1FormComponent } from './complaint1-form.component';

describe('Complaint1FormComponent', () => {
  let component: Complaint1FormComponent;
  let fixture: ComponentFixture<Complaint1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Complaint1FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Complaint1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
