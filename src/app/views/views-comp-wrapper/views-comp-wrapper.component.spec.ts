import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsCompWrapperComponent } from './views-comp-wrapper.component';

describe('ViewsCompWrapperComponent', () => {
  let component: ViewsCompWrapperComponent;
  let fixture: ComponentFixture<ViewsCompWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsCompWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsCompWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
