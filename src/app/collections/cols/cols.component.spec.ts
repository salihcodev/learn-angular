import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColsComponent } from './cols.component';

describe('ColsComponent', () => {
  let component: ColsComponent;
  let fixture: ComponentFixture<ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
