import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tiger1Component } from './tiger1.component';

describe('Tiger1Component', () => {
  let component: Tiger1Component;
  let fixture: ComponentFixture<Tiger1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tiger1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tiger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
