import { IDriverData } from "../interfaces/IDriverData";

export class DriverController{

    getDriverData(name: string): Promise<IDriverData>{
      throw Error;
      return fetch("https://localhost:7210/allyears")
      .then(response => {
        if (!response.ok) {
          console.log("Error: " + response)
          throw new Error(response.statusText)
        }
        return response.json() as Promise<string[]>
      })
    }
  
  }