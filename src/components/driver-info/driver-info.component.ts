import { Component, Input } from '@angular/core';
import { IDriverData } from '../../interfaces/IDriverData';
import { Chart, registerables } from 'chart.js';
import { DriverChartComponent } from '../driver-chart/driver-chart.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-driver-info',
    standalone: true,
    templateUrl: './driver-info.component.html',
    styleUrl: './driver-info.component.scss',
    imports: [DriverChartComponent, CommonModule]
})
export class DriverInfoComponent {
    @Input() driver?: IDriverData;
    years: string[] = [];
    driverChart: string = "d";

    constructor() {
        Chart.register(...registerables);
        if (this.driver != null) {
            this.years = this.formatYears();
        }
    }

    ngOnInit() { }

    ngOnChanges() {
        if (this.driver != null) {
            this.years = this.formatYears();
        }
    }

    private formatYears(): string[] {
        let range: number[] = [];
        let previous: number;
        let current: number;
        let result: string[] = [];
        let driverYears: string[] = this.driver!.activeYears

        for (let i = driverYears.length - 1; i >= 0; i--) {
            current = Number(driverYears[i]);

            if (i < driverYears.length - 1) {
                previous = Number(driverYears[i + 1]);
                range.push(previous);
                if (previous != current - 1) {
                    if (range.length > 2) {
                        console.log(range);
                        result.push(range[0].toString() + "-" + range[range.length - 1].toString())
                        range = [];
                    }
                    else {
                        console.log(range);
                        range.forEach(element => {
                            result.push(element.toString());
                        });
                        range = [];
                    }
                }
            }
            if (i == 0) {
                previous = Number(driverYears[i + 1]);
                range.push(current);
                if (previous == current - 1) {
                    if (range.length > 2) {
                        console.log(range);
                        result.push(range[0].toString() + "-" + range[range.length - 1].toString())
                        range = [];
                    }
                    else {
                        console.log(range);
                        range.forEach(element => {
                            result.push(element.toString());
                        });
                        range = [];
                    }
                }
            }
        }

        return result;
    }

}

