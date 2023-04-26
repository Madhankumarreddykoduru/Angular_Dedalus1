import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoMartComponent } from './sho-mart.component';

describe('ShoMartComponent', () => {
  let component: ShoMartComponent;
  let fixture: ComponentFixture<ShoMartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoMartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoMartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
