import { makeAutoObservable } from 'mobx';
import {getIpData, getWeatherData} from '../../../api/api';
import { runInAction } from 'mobx';

class MainStore {
    lon: string = '120.2148'
    lat: string = '22.9917'
    country: string = ''
    temperature: string = ''
    weather: string = ''
    weatherDetail: string = ''
    constructor() {
        makeAutoObservable(this)
    }
    searchWeatherApi = async (): Promise<void> => {
        try {
            // const ipList = await getIpData()
            const weatherList = await getWeatherData(this.lat, this.lon);
           
            runInAction(()=>{
                this.country = weatherList.data.name
                this.temperature = weatherList.data.main.temp
                this.weather = weatherList.data.weather[0].main
                this.weatherDetail = weatherList.data.weather[0].description
            })
            
            console.log(weatherList.data);
        } catch (error: any) {
            console.log(error.response);
        }
    }
}
export default MainStore;
