import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoxHeaderComponent } from './autox-header.component';

describe('AutoxHeaderComponent', () => {
  let component: AutoxHeaderComponent;
  let fixture: ComponentFixture<AutoxHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoxHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
