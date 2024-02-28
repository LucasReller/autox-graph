import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonChartComponent } from './season-chart.component';

describe('SeasonChartComponent', () => {
  let component: SeasonChartComponent;
  let fixture: ComponentFixture<SeasonChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeasonChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
