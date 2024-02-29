import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-driver-chart',
  standalone: true,
  imports: [],
  templateUrl: './driver-chart.component.html',
  styleUrl: './driver-chart.component.scss'
})
export class DriverChartComponent {
  @Input() chartX?: string[];
  @Input() chartResults?: number[];
  @Input() name?: string = "";
  tempName: string = "";
  tempCount: number = 0;
  myChart!: Chart;
  
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(){
    this.createChart();
  }

  ngOnChanges(){
    if(this.name != this.tempName && this.tempName != ""){
      this.myChart.destroy();
      this.createChart();
    }
    this.tempName = this.name!;
  }

  createChart(){
    this.myChart = new Chart("dChart", {
      type: 'line',
      data: {
        labels: this.chartX!,
        datasets: [{
          data: this.chartResults!,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          },
          x:{
            reverse: true
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

  private removeChartLabelsAndData(){
    for(let i = 0; i < this.tempCount; i++){
      this.myChart.data.labels?.pop();
      this.myChart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
      });
    }
  }

  private updateChartLabelsAndData(){
    for(let i = 0; i < this.tempCount; i++){
      this.myChart.data.labels?.push(this.chartX![i]);
      this.myChart.data.datasets.forEach((dataset) => {
        dataset.data.push(this.chartResults![i]);
      });
    }
    this.myChart.update();
  }

}
