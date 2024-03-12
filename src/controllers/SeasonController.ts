import { ISeasonData } from "../interfaces/ISeasonData";
import { ControllerHelper } from "./ControllerHelper";

export class SeasonController{

  public getYearList(): Promise<string[]>{
    return fetch(ControllerHelper.baseUrl+"allyears")
    .then(response => {
      if (!response.ok) {
        console.log("Error: " + response)
        throw new Error(response.statusText)
      }
      return response.json() as Promise<string[]>
    })
  }

  getSeasonData(year: string): Promise<ISeasonData>{
    return fetch(ControllerHelper.baseUrl+"Season/"+year)
    .then(response => {
      if (!response.ok) {
        console.log("Error: " + response)
        throw new Error(response.statusText)
      }
      return response.json() as Promise<ISeasonData>
    })
  }

}