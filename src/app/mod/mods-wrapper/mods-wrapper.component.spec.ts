import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsWrapperComponent } from './mods-wrapper.component';

describe('ModsWrapperComponent', () => {
  let component: ModsWrapperComponent;
  let fixture: ComponentFixture<ModsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModsWrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
