import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemOneComponent } from './elem-one.component';

describe('ElemOneComponent', () => {
  let component: ElemOneComponent;
  let fixture: ComponentFixture<ElemOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElemOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElemOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
