import { useEffect, useState } from "react"
import CurrentWeather from "./CurrentWeather"
import Header from "./Header"
import SevenDayForecast from "./SevenDayForecast"
import { fetchWeatherApi } from "openmeteo"

const URL = "https://api.open-meteo.com/v1/gfs";
function App() {
  const [location, setLocation] = useState({
    latitude: 52.34,
    longitude: 23.53,
  })

  const params = {
    "latitude": 52.52,
	  "longitude": 13.41,
	  "current": ["temperature_2m", "precipitation"],
	  "daily": ["temperature_2m_max", "temperature_2m_min"],
	  "timezone": "GMT"
  }

  const [date, setDate] = useState(new Date());
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 67,
    precipitation: 36
  })

  const [forecast, setForecast] = useState(
  [ 
    {
      date: '01/12/12',
      max: 34,
      min: 12,
      temperature: 32
    },
    {
      date: '01/13/12',
      max: 3321,
      min: 2,
      temperature: 934
    }
  ])

  useEffect(() => {
    fetchWeatherApi(URL, params)
    .then(responses => {return responses[0]})
    .then((response)=>{})
  },[date])

  useEffect(() => {
    const id = setInterval(()=>{
      const date = new Date()
      console.log(date)
      setDate(date)
    } , 60000)
    return ()=>{clearInterval(id)}
  }, [])

  async function uploadLocation(e)
  {
    console.log('uploading...')
    navigator.geolocation.getCurrentPosition(
      (success) => {
      setLocation({
          latitude: success.coords.latitude,
          longitude: success.coords.longitude
        }
        )}, 
      ((err) => {console.log(err)}));

  }

  return (
    <>
      <div className="bg-b1 h-screen flex flex-col justify-center items-center">
        <div className ="w-1/2 bg-b3 h-auto text-center">
          <Header location={location} date={date}/>
        </div>
        <div className="bg-b2 h-3/4 w-1/2 rounded-xl p-2">
          <CurrentWeather currentWeather={currentWeather}/>
          <SevenDayForecast forecast={forecast}/>
        </div>
        <div className="mt-5">
          <button onClick={uploadLocation} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Set Location</button>
        </div>
      </div>
      
    </>
  )
}

export default App
