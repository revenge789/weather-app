import React from 'react'

export default function CurrentWeather({currentWeather}) {
  return (
    <>
        <div className="h-2/5 w-full flex justify-center items-center">
            <div className=" bg-b5 h-3/4 aspect-square flex flex-col items-center justify-center p-3 rounded-2xl">
                <div className='flex text-3xl text-white font-semibold'><h2 className='text-6xl'>{currentWeather.temp}</h2>º</div>
                <div className="flex justify-around text-sm">
                  <h2 className="inline-block mr-2 text-white">H {currentWeather.highTemp}º</h2>
                  <h2 className="inline-block text-white">L {currentWeather.lowTemp}º</h2>
                </div>
                <h2 className='text-white text-xs'>Feels Like {currentWeather.apparentTemp}º</h2>
                <h2 className='text-white text-xs'>Precipitation: {currentWeather.precip}</h2>
                <h2 className='text-white text-xs'>Relative Humidity: {currentWeather.feelsLikeHumidity}</h2>
                <h2 className='text-white text-xs'>Wind Speed: {currentWeather.windSpeed}mph</h2>
            </div>
        </div>
    </>
  )
}
