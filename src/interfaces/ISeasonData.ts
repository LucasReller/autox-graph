import { ICompetitorData } from "./ICompetitorData";

export interface ISeasonData {
    year:string,
    competitors: ICompetitorData[],
    scoredEvents: number,
    totalEvents: number,
    totalCompetitors: number,
    totalDOTY: number,
    topTenAvg: number,
    topFiveAvg: number
}