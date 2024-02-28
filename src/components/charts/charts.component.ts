import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartItem, registerables } from 'chart.js';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit{
  @Input() chartX!: string[];
  @Input() chartResults!: number[];
  id: string = "chart";
  
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(){
    this.createChart();
  }

  ngAfterViewInit(){
    
  }

  createChart(){
    var myChart = new Chart("chart", {
      type: 'line',
      data: {
        labels: this.chartX,
        datasets: [{
          data: this.chartResults,
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

}
