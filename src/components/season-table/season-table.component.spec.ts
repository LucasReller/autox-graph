import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonTableComponent } from './season-table.component';

describe('SeasonTableComponent', () => {
  let component: SeasonTableComponent;
  let fixture: ComponentFixture<SeasonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
