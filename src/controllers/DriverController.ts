import { IDriverData } from "../interfaces/IDriverData";

export class DriverController{

    getDriverData(name: string): Promise<IDriverData>{
      return fetch('http://localhost:5287/Driver/'+name )
      .then(response => {
        if (!response.ok) {
          console.log("Error: " + response)
          throw new Error(response.statusText)
        }
        return response.json() as Promise<IDriverData>
      })
    }
  
  }