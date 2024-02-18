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
    minTemp: 0,
    maxTemp: 0,
    description: 'N/A'
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
    getWeather(location.latitude, location.longitude, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then((response) => {console.log(response)})
  },[])

  useEffect(() => {
    const id = setInterval(()=>{
      const date = new Date()
      console.log(date)
      setDate(date)
    } , 1000)
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
