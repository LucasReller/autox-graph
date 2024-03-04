import { Component, Input } from '@angular/core';
import { ICompetitorData } from '../../interfaces/ICompetitorData';
import { ISeasonData } from '../../interfaces/ISeasonData';
import { CompetitiorController } from '../../controllers/CompetitorController';
import { SeasonController } from '../../controllers/SeasonController';
import { ChartsComponent } from '../charts/charts.component';
import { ChartItem } from 'chart.js';
import { SeasonChartComponent } from '../season-chart/season-chart.component';
import { SeasonTableComponent } from '../season-table/season-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-season-info',
  standalone: true,
  imports: [SeasonChartComponent, SeasonTableComponent, CommonModule], 
  templateUrl: './season-info.component.html',
  styleUrl: './season-info.component.scss'
})
export class SeasonInfoComponent {
  @Input() competitor?:ICompetitorData;
  @Input() season?:ISeasonData;
  seasonChart: string = "s";
  competitorNull: boolean = true;
  seasonNull: boolean = true;

  constructor() {}

  ngInit(){}

  ngOnChanges(){}
}
