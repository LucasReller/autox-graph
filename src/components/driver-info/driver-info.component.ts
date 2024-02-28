import { Component, Input, OnInit } from '@angular/core';
import { IDriverData } from '../../interfaces/IDriverData';
import { DriverController } from '../../controllers/DriverController';
import { Chart, ChartItem, registerables } from 'chart.js';
import { ChartsComponent } from "../charts/charts.component";
import { DriverChartComponent } from '../driver-chart/driver-chart.component';

@Component({
    selector: 'app-driver-info',
    standalone: true,
    templateUrl: './driver-info.component.html',
    styleUrl: './driver-info.component.scss',
    imports: [DriverChartComponent]
})
export class DriverInfoComponent{
    @Input() driver!: IDriverData;
    driverChart: string = "d";

    constructor() {Chart.register(...registerables);}

    ngOnInit(){
        this.createChart();
    }

    createChart(){
        var myChart = new Chart("dChart", {
          type: 'line',
          data: {
            labels: this.driver.activeYears,
            datasets: [{
              data: this.driver.dotyAvgList,
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

