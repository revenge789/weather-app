import CurrentWeather from "./CurrentWeather"
import Header from "./Header"
import LocationAndTimeButton from "./LocationAndTimeButton"
import SevenDayForecast from "./SevenDayForecast"


function App() {

  return (
    <>
      <div className="bg-b1 h-screen flex flex-col justify-center items-center">
        <div className ="w-1/2 bg-b3 h-auto text-center">
          <Header />
        </div>
        <div className="bg-b2 h-3/4 w-1/2 rounded-xl p-2">
          <CurrentWeather />
          <SevenDayForecast />
        </div>
        <div className="mt-5">
          <LocationAndTimeButton />
        </div>
      </div>
      
    </>
  )
}

export default App
