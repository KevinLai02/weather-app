import { makeAutoObservable } from 'mobx';
import {getIpData, getWeatherData} from '../../../api/api';
import { runInAction } from 'mobx';

class MainStore {
    lon: string = ''
    lan: string = ''
    country: string = ''
    temperature: string = ''
    constructor() {
        makeAutoObservable(this)
    }
    searchWeatherApi = async (): Promise<void> => {
        try {
            const ipList = await getIpData()
            const weatherList = await getWeatherData(ipList.data.latitude, ipList.data.longitude);
           
            this.country = weatherList.data.name
            this.temperature = weatherList.data.main.temp
           
            
            console.log(weatherList.data);
        } catch (error: any) {
            console.log(error.response);
        }
        }
}
export default MainStore;
