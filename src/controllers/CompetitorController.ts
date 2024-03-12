import { ICompetitorData } from "../interfaces/ICompetitorData"

export class CompetitiorController{
    
    getCompetitorData(name:string, year:string): Promise<ICompetitorData>{
        return fetch(ControllerHelper.baseUrl+"Competitor/"+name+"?year="+year)
        .then(response => {
          if (!response.ok) {
            console.log("Error: " + response)
            throw new Error(response.statusText)
          }
          return response.json() as Promise<ICompetitorData>
        })
      }
}