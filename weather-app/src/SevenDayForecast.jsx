import React from 'react'
import DailyForecast from './DailyForecast'

export default function ({forecast}) {
  return (
    <>
        <div className = "h-3/5 w-full bg-b4 flex flex-col items-center justify-evenly">
          {forecast.map(dailyForecast =>{
            return(<DailyForecast dailyForecast={dailyForecast} key={dailyForecast.index} />)
          })}
        </div>
    </>
  )
}
