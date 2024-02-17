import CurrentWeather from "./CurrentWeather"
import SevenDayForecast from "./SevenDayForecast"


function App() {

  return (
    <>
      <div className="bg-b1 h-screen flex justify-center items-center">
        <div className="bg-b2 h-3/4 w-1/2 rounded-xl p-2">
          <CurrentWeather />
          <SevenDayForecast />
        </div>
      </div>
      
    </>
  )
}

export default App
