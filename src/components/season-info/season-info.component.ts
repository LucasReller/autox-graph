import { Component, Input } from '@angular/core';
import { ICompetitorData } from '../../interfaces/ICompetitorData';
import { ISeasonData } from '../../interfaces/ISeasonData';
import { CompetitiorController } from '../../controllers/CompetitorController';
import { SeasonController } from '../../controllers/SeasonController';

@Component({
  selector: 'app-season-info',
  standalone: true,
  imports: [],
  templateUrl: './season-info.component.html',
  styleUrl: './season-info.component.scss'
})
export class SeasonInfoComponent {
  @Input() driverName!:string;
  @Input() seasonYear!:string;

  competitorController: CompetitiorController = new CompetitiorController();
  seasonController: SeasonController = new SeasonController();

  constructor() {}

  getCompetitorData(name: string, year: string): Promise<ICompetitorData> {
    return this.competitorController.getCompetitorData(name, year);
  }

  getSeasonData(year: string): Promise<ISeasonData> {
    return this.seasonController.getSeasonData(year);
  }

}
