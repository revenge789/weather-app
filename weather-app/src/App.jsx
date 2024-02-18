import { useEffect, useState } from "react"
import CurrentWeather from "./CurrentWeather"
import Header from "./Header"
import SevenDayForecast from "./SevenDayForecast"
import { getWeather } from "./weather"


const URL = "https://api.open-meteo.com/v1/gfs";
function App() {
  const [location, setLocation] = useState({
    latitude: 10,
    longitude: 20,
  })

  const [date, setDate] = useState(new Date());

  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
    apparentTemp: 0,
    highTemp: 0,
    lowTemp: 0,
    windSpeed: 0,
    feelsLikeHumidity: 0,
    precip: 0,
    iconCode: 0,
  })

  const [forecast, setForecast] = useState(
  [ 
    {
      time:1000,
      index:0,
      iconCode: 0,
      highTemp: 0,
      lowTemp: 0,
      precip: 0,
    },
    {
      time:2000,
      index:1,
      iconCode: 0,
      highTemp: 0,
      lowTemp: 0,
      precip: 0,
    }
  ])

  useEffect(() => {
    getWeather(location.latitude, location.longitude, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then((response) => {
      console.log(response)
      setCurrentWeather(response.current)
      setForecast(response.daily)
    })
    .catch(e => {
      console.log(e)
      alert('Error with weather.')
    })
  },[location])

  useEffect(() => {
    const id = setInterval(()=>{
      const date = new Date()
      console.log(date)
      setDate(date)
    } , 30000)
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
        <div className ="w-1/2 h-auto text-center my-4">
          <Header location={location} date={date}/>
        </div>
        <div className="bg-b2 h-3/4 w-1/2 rounded-xl p-2 min-w-[340px] max-w-[490px] min-h-[610px] border-white border-4">
          <CurrentWeather currentWeather={currentWeather}/>
          <SevenDayForecast forecast={forecast}/>
        </div>
        <div className="mt-3">
          <button onClick={uploadLocation} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Set Location</button>
        </div>
      </div>
      
    </>
  )
}

export default App
