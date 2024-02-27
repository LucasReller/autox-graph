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
  seasonController: SeasonController = new SeasonController();
  @Output() searchEvent = new EventEmitter<[string, string]>();

  constructor() {
  }

  ngOnInit() {
    this.getYears();
  }

  executeSearch() {
    //call APIs and spread info to other components
    this.searchEvent.emit([this.searchDriverName, this.selectedYear]);
  }

  getNameValue(val: string) {
    this.searchDriverName = val;
  }

  getYearValue(val: string) {
    this.selectedYear = val;
  }

  async getYears(){
    let result = await this.seasonController.getYearList();
    this.yearList = result;
    this.selectedYear = result[0];
  }

}
