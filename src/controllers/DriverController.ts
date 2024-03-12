import { IDriverData } from "../interfaces/IDriverData";
import { ControllerHelper } from "./ControllerHelper";

export class DriverController{

    getDriverData(name: string): Promise<IDriverData>{
      return fetch(ControllerHelper.baseUrl+"Driver/"+name )
      .then(response => {
        if (!response.ok) {
          console.log("Error: " + response)
          throw new Error(response.statusText)
        }
        return response.json() as Promise<IDriverData>
      })
    }
  
  }