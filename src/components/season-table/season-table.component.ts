import { Component, Input } from '@angular/core';
import { ICompetitorData } from '../../interfaces/ICompetitorData';
import { ISeasonData } from '../../interfaces/ISeasonData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-season-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './season-table.component.html',
  styleUrl: './season-table.component.scss'
})
export class SeasonTableComponent {
  @Input() competitor?:ICompetitorData;
  @Input() season?:ISeasonData;
  name!: string;
  data!: [string, string, string][];
  tableIndex: number = 0;

  constructor() {}

  ngOnInit(){}

  ngOnChanges(){
    this.data = this.generateData();
  }

  private generateData():[string, string, string][]{
    let data: [string, string, string][] = [];
    let placement:string;
    let name: string;
    let pointsDiff: string;
    let refPoints: number;
    
    if(this.season! && this.competitor!)
    {
      for(var i=0; i<this.season!.competitors.length; i++){
        if(this.season!.competitors[i].name == this.competitor!.name){
          refPoints = parseFloat(this.season!.competitors[i].totalPoints);
          if(i>3){
            this.tableIndex = 0;
            for(let j=0; j<7; j++){
              let index = i-3+j;
              placement = (index+1).toString() + ".";
              name = this.season!.competitors[index].name;
              pointsDiff = this.calculatePointsDiff(refPoints,this.season!.competitors[index].totalPoints);
              data.push([placement, name, pointsDiff]);
            }
          }
          else{
            this.tableIndex = 3-i;
            for(let k=0; k<7; k++){
              let index = k;
              placement = (index+1).toString() + ".";
              name = this.season!.competitors[index].name;
              pointsDiff = this.calculatePointsDiff(refPoints,this.season!.competitors[index].totalPoints);
              data.push([placement, name, pointsDiff]);
            }
          }
        }
      }
  }

    return data;
  }

  private calculatePointsDiff(referencePts: number, points: string): string{
    let pointsNum = parseFloat(points)
    let result = Math.round((referencePts - pointsNum)*1000)/1000;
    if(referencePts == pointsNum)
      return points;
    if(result > 0)
      return "+" + result.toString();
    return result.toString();
  }

}
