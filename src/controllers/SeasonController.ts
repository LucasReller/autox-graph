import { ISeasonData } from "../interfaces/ISeasonData";

export class SeasonController{

  public getYearList(): Promise<string[]>{
    return fetch("http://localhost:5287/allyears")
    .then(response => {
      if (!response.ok) {
        console.log("Error: " + response)
        throw new Error(response.statusText)
      }
      return response.json() as Promise<string[]>
    })
  }

  getSeasonData(year: string): Promise<ISeasonData>{
    return fetch("http://localhost:5287/Season/"+year)
    .then(response => {
      if (!response.ok) {
        console.log("Error: " + response)
        throw new Error(response.statusText)
      }
      return response.json() as Promise<ISeasonData>
    })
  }

}