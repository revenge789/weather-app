import axios from "axios";


export function getWeather(lan, lon, timezone) {
    return axios.get("https://api.open-meteo.com/v1/gfs?current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timeformat=unixtime",
    {
        params: {
        latitude: lan,
        longitude: lon,
        timezone,
    },
    }
    ).then(({data}) => {
        return{
            current: parseCurrentWeather(data),
            daily: parseDailyWeather(data)
        }
        }
    )
    //.catch((err) => {
    //    console.log(err)
    //})
}

function parseCurrentWeather({current, daily}) {
    const {
        temperature_2m: temp,
        weather_code: iconCode,
        wind_speed_10m: windSpeed,
        precipitation: precip,
        relative_humidity_2m: feelsLikeHumidity,
        apparent_temperature: apparentTemp
    } = current;

    const {
        temperature_2m_max: [highTemp],
        temperature_2m_min: [lowTemp]
    } = daily;

    return {
        temp: Math.round(temp),
        apparentTemp: Math.round(apparentTemp),
        highTemp: Math.round(highTemp),
        lowTemp: Math.round(lowTemp),
        windSpeed: Math.round(windSpeed),
        feelsLikeHumidity: Math.round(feelsLikeHumidity),
        precip: Math.round(precip*100)/100,
        iconCode: Math.round(iconCode),
    }
}
function parseDailyWeather({daily})
{
    return daily.time.map((time, index) => {
        return {
            index,
            time: time*1000,
            iconCode: Math.round(daily.weather_code[index]),
            precip: Math.round(daily.precipitation_sum[index]*100)/100,
            highTemp: Math.round(daily.temperature_2m_max[index]),
            lowTemp: Math.round(daily.temperature_2m_min[index])
        }
    })
}