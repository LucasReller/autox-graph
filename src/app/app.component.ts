import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ICompetitorData } from '../interfaces/ICompetitorData';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string;

  constructor(private http: HttpClient) {
    this.title = "test";
  }

  async updateTitle(){
    let result = await this.getData();
    console.log(result.name);
    this.title = result.name;
  }  

  async getData(): Promise<ICompetitorData>{
    const value = await this.getCompetitorData("Lucas Reller", "2023");
    return value;
  }

  getCompetitorData(name:string, year:string): Promise<ICompetitorData>{
    return fetch("https://localhost:7210/Competitor/"+name+"?year="+year)
    .then(response => {
      if (!response.ok) {
        console.log("Error: " + response)
        throw new Error(response.statusText)
      }
      return response.json() as Promise<ICompetitorData>
    })
  }
}