import { Component, Input } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-season-chart',
  standalone: true,
  imports: [],
  templateUrl: './season-chart.component.html',
  styleUrl: './season-chart.component.scss'
})
export class SeasonChartComponent {
  @Input() chartX!: string[];
  @Input() chartResults!: number[];
  
  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(){
    this.createChart();
  }

  ngAfterViewInit(){
    
  }

  createChart(){
    var myChart = new Chart("sChart", {
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
