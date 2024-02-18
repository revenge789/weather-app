import React from 'react'

export default function CurrentWeather({currentWeather}) {
  return (
    <>
        <div className="h-2/5 w-full flex justify-center items-center">
            <div className=" bg-b5 h-3/4 aspect-square flex flex-col items-center justify-center">
                <h2>temperature: {currentWeather.temp}</h2>
                <h2>apparent temperature: {currentWeather.apparentTemp}</h2>
                <div>
                  <h2 className="inline-block text-white">{currentWeather.lowTemp}</h2>
                  <h2 className="inline-block">{currentWeather.highTemp}</h2>
                </div>
                <h2>Feels Like Humidity: {currentWeather.feelsLikeHumidity}</h2>
                <h2>Precipitation: {currentWeather.precip}</h2>
                <h2>wind speed: {currentWeather.windSpeed}</h2>
            </div>
        </div>
    </>
  )
}
