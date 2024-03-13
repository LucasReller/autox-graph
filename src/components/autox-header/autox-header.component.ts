import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SeasonController } from '../../controllers/SeasonController';

@Component({
  selector: 'app-autox-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './autox-header.component.html',
  styleUrl: './autox-header.component.scss'
})
export class AutoxHeaderComponent {
  yearList!: string[];
  selectedYear!: string;
  searchDriverName!: string;
  onlyCompleteSeasons!: boolean;
  seasonController: SeasonController = new SeasonController();
  @Output() searchEvent = new EventEmitter<[string, string, boolean]>();

  constructor() {
  }

  ngOnInit() {
    this.getYears();
  }

  executeSearch() {
    //call APIs and spread info to other components
    console.log("only complete seasons" + this.onlyCompleteSeasons);
    this.searchEvent.emit([this.searchDriverName, this.selectedYear, this.onlyCompleteSeasons]);
  }

  getNameValue(val: string) {
    this.searchDriverName = val;
  }

  getYearValue(val: string) {
    this.selectedYear = val;
  }

  async getYears(){
    try {
      let result = await this.seasonController.getYearList();
      this.yearList = result;
      this.selectedYear = result[0];
    } catch (error) {
      console.log("Failed to retrieve list of possible years");
    }


  }

}
