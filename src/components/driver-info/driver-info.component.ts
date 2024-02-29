import { Component, Input } from '@angular/core';
import { IDriverData } from '../../interfaces/IDriverData';
import { Chart, registerables } from 'chart.js';
import { DriverChartComponent } from '../driver-chart/driver-chart.component';

@Component({
    selector: 'app-driver-info',
    standalone: true,
    templateUrl: './driver-info.component.html',
    styleUrl: './driver-info.component.scss',
    imports: [DriverChartComponent]
})
export class DriverInfoComponent{
    @Input() driver?: IDriverData;
    driverChart: string = "d";

    constructor() {Chart.register(...registerables);}

    ngOnInit(){}

  }

