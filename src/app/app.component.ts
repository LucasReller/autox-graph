import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DriverInfoComponent } from '../components/driver-info/driver-info.component';
import { SeasonInfoComponent } from '../components/season-info/season-info.component';
import { CommonModule } from '@angular/common';
import { AutoxHeaderComponent } from '../components/autox-header/autox-header.component';
import { DriverController } from '../controllers/DriverController';
import { CompetitiorController } from '../controllers/CompetitorController';
import { SeasonController } from '../controllers/SeasonController';
import { IDriverData } from '../interfaces/IDriverData';
import { ICompetitorData } from '../interfaces/ICompetitorData';
import { ISeasonData } from '../interfaces/ISeasonData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DriverInfoComponent, SeasonInfoComponent, AutoxHeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  driver?: IDriverData;
  competitor?: ICompetitorData;
  season?:ISeasonData;


  driverController: DriverController = new DriverController();
  competitorController: CompetitiorController = new CompetitiorController();
  seasonController: SeasonController = new SeasonController();


  constructor() {}

  async executeSearch(searchParams: [string, string, boolean]) {
    let name = searchParams[0];
    let year = searchParams[1];
    let onlyCompleteSeasons = searchParams[2];
    this.getDriverData(name, onlyCompleteSeasons);
    this.getCompetitorData(name, year);
    this.getSeasonData(year);
  }

  async getDriverData(name: string, onlyComplete: boolean): Promise<IDriverData> {
    let result = await this.driverController.getDriverData(name, onlyComplete);
    this.driver = result;
    return result
  }

  async getCompetitorData(name: string, year: string): Promise<ICompetitorData> {
    let result = await this.competitorController.getCompetitorData(name, year);
    this.competitor = result;
    return result;
  }

  async getSeasonData(year: string): Promise<ISeasonData> {
    let result = await this.seasonController.getSeasonData(year);
    this.season = result
    return result;
  }

}