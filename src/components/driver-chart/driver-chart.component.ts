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
    var myChart = new Chart("dChart", {
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
