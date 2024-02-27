import { Component, Input } from '@angular/core';
import { IDriverData } from '../../interfaces/IDriverData';
import { DriverController } from '../../controllers/DriverController';

@Component({
  selector: 'app-driver-info',
  standalone: true,
  imports: [],
  templateUrl: './driver-info.component.html',
  styleUrl: './driver-info.component.scss'
})
export class DriverInfoComponent {
    @Input() driverName!: string;

    driverController: DriverController = new DriverController();

    constructor() {}

    getDriverData(name: string): Promise<IDriverData> {
      return this.driverController.getDriverData(name);
    }
}
