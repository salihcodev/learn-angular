import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemTwoComponent } from './elem-two.component';

describe('ElemTwoComponent', () => {
  let component: ElemTwoComponent;
  let fixture: ComponentFixture<ElemTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElemTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElemTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
