import { useEffect, useState } from "react"
import CurrentWeather from "./CurrentWeather"
import Header from "./Header"
import LocationAndTimeButton from "./LocationAndTimeButton"
import SevenDayForecast from "./SevenDayForecast"


function App() {
  const [location, setLocation] = useState({
    latitude: 52.34,
    longitude: 23.53,
  })
  const [date, setDate] = useState(new Date());
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 67,
    precipitation: 36
  })
  const [forecast, setForecast] = useState(
[ {
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
    const id = setInterval(()=>{
      const date = new Date()
      console.log(date)
      setDate(date)
    } , 60000)
    return ()=>{clearInterval(id)}
  }, [])

  async function uploadUserData(e)
  {
    console.log('uploading...')
    navigator.geolocation.getCurrentPosition(
      (success) => {
      setUserData(prevData => {
        return {
          ...prevData,
          latitude: success.coords.latitude,
          longitude: success.coords.longitude
        }
        })}, 
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
          <LocationAndTimeButton uploadUserData={uploadUserData}/>
        </div>
      </div>
      
    </>
  )
}

export default App
