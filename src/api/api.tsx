import axios from 'axios'

export async function getIpData(){
    return await axios({
        method: 'GET',
        url: 'https://ipapi.co/json',
    })
}
export async function getWeatherData(lat:string, lon:string){
    return await axios({
        method: 'GET',
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f5463ea0ca309e71ca7e8723b42ab05a&units=metric`,
    })
}