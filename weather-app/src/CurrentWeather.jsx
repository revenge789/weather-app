import React from 'react'

export default function CurrentWeather({currentWeather}) {
  return (
    <>
        <div className="h-2/5 w-full flex justify-center items-center">
            <div className=" bg-b5 h-3/4 aspect-square flex flex-col items-center justify-center">
                <h2>temperature: {currentWeather.temperature}</h2>
                <h2>precipitation: {currentWeather.precipitation}</h2>
            </div>
        </div>
    </>
  )
}
