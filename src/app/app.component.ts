import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DriverInfoComponent } from '../components/driver-info/driver-info.component';
import { SeasonInfoComponent } from '../components/season-info/season-info.component';
import { CommonModule } from '@angular/common';
import { AutoxHeaderComponent } from '../components/autox-header/autox-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DriverInfoComponent, SeasonInfoComponent, AutoxHeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  name!: string;
  year!: string;

  constructor() {}

  async executeSearch(searchParams: [string, string]) {
    this.name = searchParams[0];
    this.year = searchParams[1];
  }
}